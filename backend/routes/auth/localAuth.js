const express = require('express');
const router = express.Router();
const { SignUp,Login, } = require('../../Controller/user/localAuth');

router.post('/login', Login);
router.post('/signup', SignUp);


module.exports = router;