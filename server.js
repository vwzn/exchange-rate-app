const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Endpoint untuk mengambil nilai tukar
app.get('/api/exchange-rate', async (req, res) => {
    try {
        // Ganti dengan API yang sesuai
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const rateUSDToIDR = response.data.rates.IDR; // Mengambil nilai tukar USD ke IDR
        res.json({ rateUSD: 1, rateIDR: rateUSDToIDR });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching exchange rate');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
