var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nasser Mohamed Fan Club', nasserImage: 'images/nasser_is_the_sun.jpg'});
});

module.exports = router;
