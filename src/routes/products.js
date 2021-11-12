const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/", productsController.listProduct);

router.get("/detalle/:id", productsController.detailView);

router.get("/cart", productsController.cartView);

router.get("/create", productsController.createView);

router.post("/create", productsController.createProduct);

router.get("/:id/edit", productsController.updateView);

// router.put('/:id', productsController.editProduct);

// router.delete('/:id', productsController.deleteProduct);

module.exports = router;
