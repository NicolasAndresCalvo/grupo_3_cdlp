const path = require('path');

const productsController = {
  // listProduct: ,
  detailProduct: (req, res) => res.render('./products/productDetail'),
  cart: (req, res) => res.sendFile(path.join(__dirname, './products/productCart'))
  // createView: ,
  // updateView: ,
  // createProduct: ,
  // editProduct: ,
  // deleteProduct:
}

module.exports = productsController;