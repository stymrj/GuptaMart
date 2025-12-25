const express = require('express')
const { userSignUp, userSignIn, userSignOut } = require('../Controller/UserController')
const router = express.Router()



router.post('/signup', userSignUp)
router.post('/login', userSignIn)
router.post('/logout', userSignOut)



module.exports = {
    userRouter : router
}