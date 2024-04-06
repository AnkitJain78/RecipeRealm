const { Axios } = require("axios");
const { BASE_URL, GOOGLE_URL } = require("../constants/constants");
const RecipeAPI = new Axios({
    baseURL: BASE_URL,
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    }
})

module.exports = {
    RecipeAPI
}