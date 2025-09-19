const express  = require("express")
useroute = express.Router()
const Userss = require("../models/usermodel")


useroute.post("/api/users", async (req, res) => {
    const myusers = new Userss(req.body)
    const savedata = await myusers.save()
    if (savedata) {
        res.status(200).json({
            message: "Successfully user signup",
            alluser: myusers
        })
    }
})

// POST: /api/login
useroute.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await Userss.findOne({ email });
    if (!user) {
        return res.status(400).json({ success: false, message: "User not found" });
    }
    if (user.password !== password) {
        return res.status(400).json({ success: false, message: "Invalid password" });
    }

    res.json({ success: true, message: "Login successful", user });
});

useroute.get("/alluser", async (req, res) => {
    const user = await Userss.find({})
    res.json({
        "Users": user
    })
})

useroute.get("/alluser/:id", async (req, res) => {
    const _id = req.params.id
    const user = await Userss.findOne({ _id })
    res.json({
        "Perticular data": user
    })
})

module.exports = useroute