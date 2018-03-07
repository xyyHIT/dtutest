var express = require('express');
var logger = require('log4js').getLogger(__filename);

var router = express.Router();


router.get('/dtu', function (req, res) {
    logger.info("dtu...");
    res.json({success: true});
});

module.exports = router;