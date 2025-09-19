const express = require("express")
const router = express.Router();
const Productss = require("../models/productmodel")


router.post("/api/products", async (req, res) => {
    const myproducts = new Productss(req.body)
    const savedata = await myproducts.save()
    if (savedata) {
        res.status(200).json({
            message: "Successfully product added",
            allproduct: myproducts
        })
    }
})


router.get("/allproducts", async (req, res) => {
    const allData = await Productss.find({})
    res.json({
        "Products": allData
    })
})

router.get("/allproducts/:id", async (req, res) => {
    const _id = req.params.id
    const product = await Productss.findOne({ _id })
    res.json({
        "Perticular data": product
    })
})


module.exports = router