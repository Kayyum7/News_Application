const express = require('express')
const NewsItemModel = require('../models/NewsItem')
const router = express.Router()


router.post("/addnewsitem", async function (req, res) {
    try {
        const newitem = new NewsItemModel(req.body)
        await newitem.save()
        res.send('News added successfully')
    } catch (error) {
        res.status(400).send(error)
        console.error();
    }
});

router.get("/getallnewsitems", async function (req, res) {
    try {
        const data = await NewsItemModel.find();
        res.send(data)
    } catch (error) {
        res.status(400).send(error)
        console.error();
    }
});

router.post("/getnewsitemsbyuserid", async function (req, res) {
    try {
        const data = await NewsItemModel.find();
        const userPostedNewsItems = data.filter((obj) => obj.postedBy.userid === req.body.userid)
        console.log(data)
        res.send(userPostedNewsItems)
    } catch (error) {
        res.status(400).send(error)
        console.error();
    }
});

router.post("/getnewsitembyid", async function (req, res) {
    try {
        const data = await NewsItemModel.findOne({ _id: req.body.newsid });
        res.send(data)
    } catch (error) {
        res.status(400).send(error)
        console.error();
    }
});

module.exports = router;