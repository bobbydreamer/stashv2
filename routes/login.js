const express = require('express');
const router = express.Router();

// ***************************************
// ** Global Variables **
// ***************************************

router.get('/login', function (req, res) {
  // var racfid = req.app.get('racfid');
  console.log('/login');

  // racfid = req.body.racfid ;
  // uidpw64 = 'Basic ' + Buffer.from(uidpw).toString('base64');
  res.render('login',{title: "Login"});
});


module.exports = router;