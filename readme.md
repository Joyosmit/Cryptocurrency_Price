# Cryptocurrency Stats API

This is a Node.js API built with Express that provides the latest data for cryptocurrencies. You can use this API to get the current price, market cap, and 24-hour change of supported cryptocurrencies.

## Features

- Fetch real-time data for Bitcoin, Ethereum, and matic-network from the CoinGecko API.
- Store fetched data in MongoDB Atlas for persistence.
- Handle errors gracefully and provide meaningful error messages.

## API Endpoints

### `/stats`

This endpoint fetches the latest cryptocurrency data.

#### Request Parameters

- `coin` (query parameter) – The name of the cryptocurrency you want to fetch data for. Currently, the supported coins are:
  - `bitcoin`
  - `ethereum`
  - `matic-network`

#### Example Request

/stats?coin=ethereum