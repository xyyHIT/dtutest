var express = require('express');
var logger = require('log4js').getLogger(__filename);

var router = express.Router();


router.get('/dtu', function (req, res) {
    logger.info("dtu get ...");
    res.json({success: true});
});

router.post('/dtu', function (req, res) {
    logger.info("dtu post ...");
    res.json({success: true});
})

module.exports = router;