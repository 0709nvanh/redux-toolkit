import Order from '../controllers/order'

export const getOrder = async (req, res) => {
    try {
        const user = req.body.user
        if(user){
            try {
                const orders = await Order.find({ userId: user._id }).exec();
                return res.json(orders)
            } catch (error) {
                return res.status(400).json({
                    msg: "Error"
                })
            }
        } else{
            try {
                const orders = await Order.find().populate('userId').populate({ path: "listOrder", populate: { path: "productId"}}).exec()
                return res.json(orders)
            } catch (error) {
                return res.status(400).json({
                    msg: "Error"
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
} 