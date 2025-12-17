const isBuyer = (req,res,next)=>{
    try {
        if(req.user.role == 'buyer'){
            next()
        }else{
            throw new Error('Buyer can not perform this task!')
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    isBuyer
}