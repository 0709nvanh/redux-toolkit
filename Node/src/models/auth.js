import mongoose, { ObjectId } from 'mongoose';
import { v4 as uuidv4 } from 'uuid'
import { createHmac } from  'crypto'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, 
        minLength: 3
    },
    email: {
        type: String,
        unique: true, 
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }, 
    salt: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

userSchema.methods = {
    authenticate(password){
        try {
            return this.password == this.encrytPassword(password)
        } catch (error) {
            console.log(error)
        }
    },
    encrytPassword(password){
        if(!password) return
        try {
            return createHmac('sha256', this.salt).update(password).digest('hex')
        } catch (error) {
            console.log(error)
        }
    }
}

userSchema.pre("save", function(next){
    try {
        this.salt = uuidv4()
        this.password = this.encrytPassword(this.password)
        next()
    } catch (error) {
        console.log(error)
    }
})

export default mongoose.model("User", userSchema)