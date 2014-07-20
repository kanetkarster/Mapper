var express = require('express');
var readdirSync = require('fs').readdirSync;
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Mapper', files: readdirSync('../public/gpx') });
});

module.exports = router;
