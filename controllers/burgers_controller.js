var express = require("express");
var router = express.Router();
// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
  res.redirect('/burgers');
});


router.get('/burgers', function(req,res) {
  models.burgers.findAll()
  .then(function(data){
    res.render('index', { burgers: data });
  });
});

router.post('/burgers/create', function(req, res) {
  models.burgers.create({
        burger_name: req.body.name,
        devoured: 0})
        .then(function() {
     res.redirect('/burgers');
    });
});

router.put('/burgers/update/:id', function(req,res) {
    models.burgers.update({
    devoured:1
    },{where:{
        id:req.params.id
    }}
   ).then(function(){
        res.redirect('/burgers');
   });
});
// Export routes for server.js to use.
module.exports = router;