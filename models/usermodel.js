const mongoose = require("mongoose")

const Usermodel = new mongoose.Schema({
    name: String,
    email: String,
    password: String   
})

const Userss = mongoose.model("myuserdata", Usermodel)
module.exports = Userss