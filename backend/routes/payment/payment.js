const express = require('express');
const router = express.Router();
const paypalRoute = require('./paypal');
const chapaRoute = require('./chapa')

router.use('/chapa',chapaRoute)
router.use('/paypal',paypalRoute)

module.exports = router;