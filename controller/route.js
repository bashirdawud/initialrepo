const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Hello Nodejs");
})

router.get("/health-check", (req, res) => {
    res.sendStatus(200);
} )

module.exports = router;