const express = require('express');
const router = express.Router();
const localAuthRoutes = require('./auth/localAuth');
const googleAuthRoute = require('./auth/google');
const passport = require('passport');

router.use('/local',localAuthRoutes)
router.use('/google',googleAuthRoute)

router.get('/isLogged',passport.authenticate('jwt', { session: false }),(req,res)=>{
    return  res.status(200).json({
        message : "User is logged in",
    })
})


module.exports = router;