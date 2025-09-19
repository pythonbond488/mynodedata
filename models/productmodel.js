const mongoose = require("mongoose")

const Productmodel = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String

})

const Products = mongoose.model("allproductdata", Productmodel)
module.exports = Products



// d5TejVLcI4t3PwNQ
//prakharsaini1018_db_user