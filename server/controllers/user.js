import User from "../models/User.js"
import bcrypt from 'bcryptjs'

export  const signup = async (req, res, next) =>{
    try {
        const salt = bcrypt.genSaltSync(11);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password:hash});
        await newUser.save();
        res.status(201).send("user has been created")

    } catch (err) {
        console.log(err);
    }
}
