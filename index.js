const express = require("express")

const bodyParser = require("body-parser")
require("./connection/database")
const cors = require("cors")

const myserver = express()
myserver.use(cors(origin = "*"))
myserver.use(bodyParser.json())
myserver.use(express.json())
const product = require("./routes/productroute")
const user = require("./routes/userroute")


myserver.get("/",(req,res)=>{
    res.send("hello")
})
myserver.use("/product", product)
myserver.use("/user", user)




const port = 8000
myserver.listen(port, (req, res) => {
    console.log(`server started of allusers on port http://localhost:${port}`)

})
