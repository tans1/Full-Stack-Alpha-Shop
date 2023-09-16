const express = require('express');
const router = express.Router();
const {makePayment ,successPayment ,cancelPayment} = require('../../Controller/payment/paypal')

router.get('/pay',makePayment)
router.get('/success',successPayment)
router.get('cancel',cancelPayment)


module.exports = router;