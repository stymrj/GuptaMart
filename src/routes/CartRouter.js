const express = require('express');
const { isBuyer } = require('../Middleware/isBuyer');
const { isLoggedIn } = require('../Middleware/isLoggedIn');
const { viewCart, addToCart } = require('../Controller/CartController');
const router = express.Router();


router.get('/cart',isLoggedIn, isBuyer, viewCart);
router.post('/cart/:id',isLoggedIn, isBuyer, addToCart);



module.exports = { 
    CartRouter: router 
}
