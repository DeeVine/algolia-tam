// hello_algolia.js
const algoliasearch = require('algoliasearch');

// Connect and authenticate with your Algolia app
const client = algoliasearch('T0QJTNZ8GG', 'c29e046ef06d6c5de81af5f2a9f48ee5');

// Create a new index
const index = client.initIndex('spencer_and_williams');

const products = require('./products.json');

// Convert prices to 20% off and round down to lowest full number
products.forEach(data => {
  data.price = Math.floor(data.price * 0.8);
});

// upload products to algolia index
index.saveObjects(products, { autoGenerateObjectIDIfNotExist: true });
