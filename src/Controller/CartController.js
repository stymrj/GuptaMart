const { Product } = require('../models/productSchema');
const { User } = require('../models/userSchema');

const addToCart = async (req, res) => {
    try {
        const { quantity } = req.body
        const { id } = req.params

        const foundProduct = await Product.findById(id)
        if(!foundProduct){
            throw new Error('Product not found!')
        }

        const user = await User.findById(req.user._id)

        const prevCart = user.cart
        let isProductInCart = false

        //updating cart if present
        for(let item of prevCart){
            if(item.product.toString() === id.toString()){
                item.quantity = quantity
                isProductInCart = true
                break
            }
        }

        //if not present in cart 
        if(!isProductInCart){
            prevCart.push({
                product : id,
                quantity
            })
        }
        await user.save()

        res.status(201).json({msg:"Updated Cart", cart: user.cart})

    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

const viewCart = async (req, res) => {
    try {
        const user = await User.findById(req.user._id); 
        res.status(200).json({ cart: user.cart });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    addToCart, viewCart
}