import mongoose, { ObjectId } from 'mongoose';

const productSchemas = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    price: {
        type: Number,
        required: true
    }, 
    slug: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    },
}, { timestamps: true})

productSchemas.index({"name": "text"})
export default mongoose.model("Product", productSchemas)