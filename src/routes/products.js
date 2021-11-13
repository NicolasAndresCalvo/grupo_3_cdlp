const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/", productsController.listProduct);

router.get("/detalle/:id", productsController.detailView);

router.get("/cart", productsController.cartView);

router.get("/create", productsController.createView);

router.post("/create", productsController.createProduct);

router.get("/edit/:id", productsController.updateView);

router.put('/edit/:id', productsController.editProduct);

router.delete('/delete/:id', productsController.deleteProduct);

module.exports = router;
