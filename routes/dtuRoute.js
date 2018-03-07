var express = require('express');
var logger = require('log4js').getLogger(__filename);

var router = express.Router();


router.get('/dtu', function (req, res) {
    logger.info("req.query ===>"+ JSON.stringify(req.query));
    res.json({success: true});
});

router.post('/dtu', function (req, res) {
    logger.info("req.body ===>" + JSON.stringify(req.body));
    res.json({success: true});
})

module.exports = router;