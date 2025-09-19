const express = require("express")

const bodyParser = require("body-parser")
require("./connection/database")
const cors = require("cors")

const myserver = express()
myserver.use(cors(origin = "*"))
myserver.use(bodyParser.json())
myserver.use(express.json())
const ProductRoutes = require("./routes/productroute")
const UserRoutes = require("./routes/userroute")


myserver.get("/",(req,res)=>{
    res.send("hello")
})
myserver.use("/product", ProductRoutes)
myserver.use("/user", UserRoutes)




const port = 8000
myserver.listen(port, (req, res) => {
    console.log(`server started of allusers on port http://localhost:${port}`)

})
