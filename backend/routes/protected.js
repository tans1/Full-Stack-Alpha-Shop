const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/',passport.authenticate('jwt', { session: false }),(req,res)=>{
    return res.status(200).json({
        message : "User logged in successfully",
        user_id  : req.user._id
    })
})


module.exports = router;