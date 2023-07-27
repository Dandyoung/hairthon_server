var express = require('express');
var router = express.Router();

/* push_GET home page. */
router.get('/', function(req, res, next) {
  res.render('aaa.html');
});

module.exports = router;
