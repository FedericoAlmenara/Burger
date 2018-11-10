var express = require("express")

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data){
        var hndlbrsObject = {
            burgers: data
        };
        console.log(hndlbrsObject);
        res.render("index", hndlbrsObject);
    })
});

module.exports = router;
