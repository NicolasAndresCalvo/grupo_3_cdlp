const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {
  // muestra todos los productos (GET)
  listProduct: (req, res) => {
    res.render("./products/productList", { products });
  },
  // /productos/:id muestra el detalle de un prod seleccionado (GET)
  detailView: (req, res) => {
    const id = req.params.id;
    const producto = products.find((x) => x.id == id);
    if (producto) res.render("./products/productDetail", { producto });
    else res.redirect("/");
  },
  // muestra el carrito
  cartView: (req, res) => res.render("./products/productCart"),
  // trae el formulario para crear productos (GET)
  createView: (req, res) => res.render("./products/productCreate"),
  // trae el formulario para editar un producto (GET)
  updateView: (req, res) => res.render("./products/productUpdate"),
  // crea un nuevo producto (POST)
  createProduct: (req, res) => {
    let body = req.body;
    console.log(req.file);
    const productoMasAlto = products.sort((a, b) => a.id - b.id);
    const idMasAlto = productoMasAlto[productoMasAlto.length - 1].id;

    const nuevo = {
      ...body,

      id: idMasAlto + 1,
    };
    products.push(nuevo);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    /*
     */

    res.redirect("/");
  },
  // edita un producto existente (PUT)
  editProduct: (req, res) => res.render("./products/productEdit"),
  // elimina un producto existente (DELETE)
  deleteProduct: (req, res) => res.render("./products/productDelete"),
};

module.exports = productsController;
