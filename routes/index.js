var express = require('express');
var router = express.Router();

var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
});

router.get('/account', ensureAuthenticated, function(req, res, next) {
  res.render('account', {user: req.user});
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}


module.exports = router;
