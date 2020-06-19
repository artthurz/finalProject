const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const PeopleController = require("./controllers/PeopleController");
const IntegracaoAController = require("./controllers/IntegracaoAController");

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

routes.get("/integracoes", IntegracaoAController.index);
routes.get("/integracoes/:id", IntegracaoAController.show);
routes.post("/integracoes", IntegracaoAController.store);
routes.put("/integracoes/:id", IntegracaoAController.update);
routes.delete("/integracoes/:id", IntegracaoAController.destroy);

module.exports = routes;
