const express = require("express")

const bodyParser = require("body-parser")
require("./connection/database")
const cors = require("cors")


const myserver = express()
myserver.use(express.json())
const product = require("./routes/productroute")
const user = require("./routes/userroute")


myserver.get("/",(req,res)=>{
    res.get("hello")
})
myserver.use("/product", product)
myserver.use("/user", user)

myserver.use(cors(origin = "*"))
myserver.use(bodyParser.json())


const port = 8000
myserver.listen(port, (req, res) => {
    console.log(`server started of allusers on port http://localhost:${port}/alluser`)
    console.log(`server started of allproducts on port http://localhost:${port}/allproducts`)
})
