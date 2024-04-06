const {RecipeAPI, GoogleAPI} = require("../api/apiConfig")

module.exports.HomeController = function(req,res){
    res.render("home")
}
module.exports.SearchController = function(req,res){
    res.render("search")
}
module.exports.DetailsController = function(req,res){
    const { id } = req.params;
    console.log(id)
    res.render("details")
}
module.exports.ErrorController = function (req,res){
    res.render("error")
}
module.exports.RecipeController =  function (req,res){
    const { recipeName } = req.body;
    RecipeAPI.get(`?query=${recipeName}`).then(async (response)=>{
        let responseData = JSON.parse(response.data)
        const tempData = responseData
        res.render("recipe", {recipe: tempData, name: recipeName})
    })
}