const axios = require('axios');

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/coins/markets';

exports.getCryptoData = async (coin) => {
    try {
        const response = await axios.get(COINGECKO_API_URL, {
            params: {
                vs_currency: 'usd',
                ids: coin,
            },
        });

        return response.data[0]; // Return the first (and only) result
    } catch (error) {
        console.error('Error fetching data from CoinGecko:', error.message);
        throw new Error('Error fetching cryptocurrency data');
    }
};
