const express = require("express");
const {
    DetailsController,
    ErrorController,
    HomeController,
    SearchController,
    RecipeController
} = require("../controllers/recipeController")
const Router = express.Router();
Router.get("/", HomeController);
Router.get("/search", SearchController)
Router.post("/recipes",RecipeController)
Router.get("*",ErrorController);
module.exports = Router;