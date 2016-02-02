var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
 
 
 
 var userList = ['me', 'you', 'them'];
 res.render('users',{userList:userList});
// res.render('users');
});

module.exports = router;
