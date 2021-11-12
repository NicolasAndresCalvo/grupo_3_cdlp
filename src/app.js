const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mainRoute = require("./routes/main");
const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");
const methodOverride = require("method-override");

const app = express();
const port = 3000;
const publicPath = path.join(__dirname, "../public");

app.set("view engine", "ejs");

app.set("views", "./src/views");

app.use(express.static(publicPath));

app.use(morgan("tiny"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));

app.use("/", mainRoute);

app.use("/users", usersRoute);

app.use("/products", productsRoute);

app.listen(process.env.PORT || port, () =>
  console.log("server up at: http://localhost:3000/")
);
