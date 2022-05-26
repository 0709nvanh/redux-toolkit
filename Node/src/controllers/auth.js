import User from '../models/auth';
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    const { email, name, password } = req.body
    console.log('req.body', req.body)
    try {
        const existUser = await User.findOne({ email }).exec()
        if(existUser){
            return res.json({
                msg: "User exited"
            })
        }

        const user = await new User({ email, name, password }).save()
        res.json({
            user: {
                name: user.name,
                email: user.email,
                _id: user._id
            }
        })
    } catch (error) {
        res.status(400).json({
            msg: "Error"
        })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if(!user){
            return res.status(401).json({
                msg: "Do not find user"
            })
        }

        if(!user.authenticate(password)){
            return res.status(401).json({
                msg: "Password is incorrect"
            })
        }

        const token = jwt.sign({ _id: req.params.id}, 'vananh', { expiresIn: 60*60 })
        res.json({
            token,
            user: {
                // _id: user.id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        
    }
}