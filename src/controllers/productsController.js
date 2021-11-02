const path = require('path');

const productsController = {
  listProduct: (req, res) => res.render('./products/productList'),
  detailView: (req, res) => res.render('./products/productDetail'),
  cartView: (req, res) => res.render('./products/productCart'),
  createView: (req, res) => res.render('./products/productCreate'),
  updateView: (req, res) => res.render('./products/productUpdate'),
  createProduct: (req, res) => res.render('./products/productCreatePost'),
  editProduct: (req, res) => res.render('./products/productEdit'),
  deleteProduct: (req, res) => res.render('./products/productDelete')
}

module.exports = productsController;