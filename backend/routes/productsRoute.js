const express = require('express');
const router = express.Router();
const { GetAllProducts,GetDiscountedProducts,FilterProducts,AddProduct , GetCategories} = require('../Controller/products/products');
const passport = require('passport');

router.get('/all', GetAllProducts);
router.get('/categories', GetCategories);
router.get('/discounted',passport.authenticate('jwt', { session: false }), GetDiscountedProducts);
router.get('/filter', FilterProducts);
router.post('/create',AddProduct);

module.exports = router