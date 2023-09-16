const express = require('express');
const router = express.Router();
const { makePayment, chapaCallback } = require('../../Controller/payment/chapa')

router.get('/pay',makePayment)
router.get('/callback',chapaCallback)

module.exports = router;