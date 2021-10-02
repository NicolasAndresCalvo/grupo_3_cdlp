const path = require('path');

const productsController = {
  // listProduct: ,
  detailView: (req, res) => res.render('./products/productDetail'),
  cartView: (req, res) => res.render('./products/productCart'),
  createView: (req, res) => res.render('./products/productCreate')
  // updateView: ,
  // createProduct: ,
  // editProduct: ,
  // deleteProduct:
}

module.exports = productsController;