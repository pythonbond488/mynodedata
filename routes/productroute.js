const express = require("express")
const router = express.Router();
const Products = require("../models/productmodel");


router.post("/api/products", async (req, res) => {
    const myproducts = new Products(req.body)
    const savedata = await myproducts.save()
    if (savedata) {
        res.status(200).json({
            message: "Successfully product added",
            allproduct: myproducts
        })
    }
})


router.get("/allproducts", async (req, res) => {
    const allData = await Products.find({})
    res.json({
        "Products": allData
    })
})

router.get("/allproducts/:id", async (req, res) => {
    const _id = req.params.id
    const product = await Products.findOne({ _id })
    res.json({
        "Perticular data": product
    })
})


module.exports = router