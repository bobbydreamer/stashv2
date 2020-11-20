const express = require('express');
const router = express.Router();

// init app
const app = express();

var test_val = 0;

router.get('/', function(req, res){
  var test_val = req.app.get('test_val');
  test_val = 1;
  req.app.set('test_val', test_val);
  res.render('home',{title: "home"});
});

module.exports = router;