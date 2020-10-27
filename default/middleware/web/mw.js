var express = require("express");
var router = express.Router();

// middle-ware settings
router.use("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Content-Length, Authorization, Origin, Accept, X-Requested-With, user_idx, token"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    console.log("web middleware ---")

    return next();
});

module.exports = router;