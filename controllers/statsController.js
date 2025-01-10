const { getCryptoData } = require('../services/coinGeckoService');
const Crypto = require('../models/cryptoModel');

exports.getStats = async (req, res) => {
    const { coin } = req.query;

    // Supported coins
    const SUPPORTED_COINS = ['bitcoin', 'ethereum', 'matic-network'];

    // Validate coin query parameter
    if (!coin || !SUPPORTED_COINS.includes(coin.toLowerCase())) {
        return res.status(400).json({
            error: `Invalid or missing coin. Supported coins are: ${SUPPORTED_COINS.join(', ')}`
        });
    }

    try {
        // Fetch data from the CoinGecko service
        const data = await getCryptoData(coin.toLowerCase());

        if (!data) {
            return res.status(404).json({ error: 'Data not found for the requested coin.' });
        }

        // Save the fetched record in MongoDB
        const newCryptoRecord = new Crypto({
            coin: coin.toLowerCase(),
            price: data.current_price,
            marketCap: data.market_cap,
            '24hChange': data.price_change_percentage_24h,
        });

        await newCryptoRecord.save();

        // Respond with the fetched data
        res.json({
            price: data.current_price,
            marketCap: data.market_cap,
            '24hChange': data.price_change_percentage_24h,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Unable to fetch data or save record. Please try again later.' });
    }
};
