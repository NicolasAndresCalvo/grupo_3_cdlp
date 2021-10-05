const express = require('express');
const productsController = require('../controllers/productsController')

const router = express.Router();

// router.get('/', productsController.listProducts);

// router.get('/:id', productsController.detailView);

router.get('/cart', productsController.cartView);

router.get('/create', productsController.createView);

router.get('/:id/edit', productsController.updateView);

// router.post('/', productsController.createProduct);

// router.put('/:id', productsController.editProduct);

// router.delete('/:id', productsController.deleteProduct);

module.exports = router;