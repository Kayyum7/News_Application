const express = require('express');
const UserModel = require('../models/UserModel');
const router = express.Router();

router.post("/register", async function (req, res) {
    try {
        const newitem = new UserModel(req.body)
        await newitem.save()
        res.send('User added successfully')
    } catch (error) {
        res.status(400).send(error)
        console.error();
    }
});

router.post("/login", async function (req, res) {
    try {
        const result = await UserModel.findOne({ email: req.body.email, password: req.body.password })
        console.log(result);
        delete result.password
        res.send(result)
    } catch (error) {
        res.status(400).send(error)
        console.error();
    }
});


module.exports = router