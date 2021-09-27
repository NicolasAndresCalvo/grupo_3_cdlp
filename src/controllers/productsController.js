const path = require('path');

const productsController = {
  cart: (req, res) => res.sendFile(path.join(__dirname, './products/productCart')),
  detail: (req, res) => res.render('./products/productDetail')
}

module.exports = productsController;