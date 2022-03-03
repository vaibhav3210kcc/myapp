var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req)
        // res.send("no")
    res.render('index', { title: 'Express', myNmae: 'vaibhav' });
});

module.exports = router;