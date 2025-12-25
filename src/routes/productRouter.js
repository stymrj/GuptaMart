const express = require('express')
const router = express.Router()

const { addProduct, viewProduct, deleteProduct, editProduct } = require('../Controller/ProductController')


const { isLoggedIn } = require('../Middleware/isLoggedIn')
const { isBuyer } = require('../Middleware/isBuyer')
const { isSeller } = require('../Middleware/isSeller')



router.post('/addProduct',isLoggedIn, isSeller, addProduct)
router.get('/product/:id',isLoggedIn, isBuyer, viewProduct)
router.delete('/product/:id',isLoggedIn, isSeller, deleteProduct)
router.patch('/product/edit/:id',isLoggedIn, isSeller, editProduct)



module.exports = {
    productRouter : router
}