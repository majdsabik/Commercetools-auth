const axios = require('axios');

const axiosCustomer = axios.create({
  baseURL: 'http://localhost:3001/',
});

module.exports = axiosCustomer;
