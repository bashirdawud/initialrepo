const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Hello World");
})

router.get("/health-check", require('express-healthcheck')({
    healthy : function(){
        return { everything: 'is ok'};
    }
}));

module.exports = router;