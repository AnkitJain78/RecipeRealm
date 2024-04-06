const express = require("express");
const { engine } = require("express-handlebars");
const dotenv = require("dotenv");
dotenv.config();
const  Router  = require("./router/recipeRouter")
const PORT = process.env.PORT || 5000
const app = express();
app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "main",
    extname: ".hbs",
    helpers: {
      calculation: function (value) {
        return value + 100;
      },
      list: function (value, options) {
         return "<h2>" + options.fn({value: value[0]}) + "</h2"; 
      }
    },
  })
);
app.set("view engine", "hbs");
app.use(express.json())
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:false}))
app.use("/",Router)
app.listen(PORT,()=>{
    console.log(`LISTENING ON PORT ${PORT}`)
})