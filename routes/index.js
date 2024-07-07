const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const router = require("express").Router();


router.use('/',require('./swagger'));

router.use('/users', require('./users'));

router.get('/login', passport.authenticate('github'), (req,res) => {});

router.get('/logout', function(req,res,next){
    req.logout(function(err){
        if(err){return next(err);}
        res.redirect('/');
    });
});


module.exports = router;


