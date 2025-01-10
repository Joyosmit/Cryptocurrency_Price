const { getCryptoData } = require('../services/coinGeckoService');

exports.getStats = async (req, res) => {
    const { coin } = req.query;

    // Supported coins
    const SUPPORTED_COINS = ['bitcoin', 'ethereum', 'dogecoin'];

    // Validate coin query parameter
    if (!coin || !SUPPORTED_COINS.includes(coin.toLowerCase())) {
        return res.status(400).json({
            error: `Invalid or missing coin. Supported coins are: ${SUPPORTED_COINS.join(', ')}`
        });
    }

    try {
        const data = await getCryptoData(coin.toLowerCase());
        if (!data) {
            return res.status(404).json({ error: 'Data not found for the requested coin.' });
        }

        res.json({
            price: data.current_price,
            marketCap: data.market_cap,
            '24hChange': data.price_change_percentage_24h,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Unable to fetch data. Please try again later.' });
    }
};
