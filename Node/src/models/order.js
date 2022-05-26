import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'users'
    },
    listOrder: [
        {
            productId: {
                type: ObjectId,
                ref: 'products'
            },
            quantity: {
                type: Number
            }
        }
    ],
    status: {
        type: Number,
        default: 1,
    },
    name: { type: String, required: true, minLength: 5 },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    total: { type: Number },
}, { timestamps: true })

export default mongoose.model("Order", orderSchema)