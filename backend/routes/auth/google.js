const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get(
    '/',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    }),
);


router.get(
    '/callback',
    passport.authenticate('google', {
        failureRedirect: '/',
        session: false,
    }),
     async (req, res) => {
        const payload = {
            id : req.user._id
        }
        const token = jwt.sign(payload, "jwt secret",{expiresIn: '1d'})
        await res.cookie('token', token, { maxAge: 86400000, httpOnly: true , signed : true});
        return  res.redirect("http://localhost:3000/products");

    },
);
  
module.exports = router;