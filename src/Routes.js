const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const PeopleController = require("./controllers/PeopleController");

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

routes.get("/peoples", PeopleController.index);
routes.get("/peoples/:id", PeopleController.show);
routes.post("/peoples", PeopleController.store);
routes.put("/peoples/:id", PeopleController.update);
routes.delete("/peoples/:id", PeopleController.destroy);

module.exports = routes;
