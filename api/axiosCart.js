const axios = require('axios');

const axiosCart = axios.create({
  baseURL: 'http://localhost:3002/',
});

module.exports = axiosCart;
