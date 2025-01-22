require('dotenv').config();

module.exports = exports = {
    port: 3000,
    // Contentstack Config
    contentstack: {
        api_key: process.env.API_KEY,
        delivery_token: process.env.DELIVERY_TOKEN,
        environment: process.env.ENVIRONMENT
    }
};