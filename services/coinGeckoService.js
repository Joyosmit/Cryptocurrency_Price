const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

const COINGECKO_API_URL = process.env.COINGECKO_API_URL;

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
