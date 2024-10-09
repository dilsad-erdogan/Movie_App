const User = require('../models/user');

async function register(req, res) {
    try{
        const { name, email, password } = req.body;

        const user = new User({
            name: name,
            email: email,
            password: password
        });

        const savedUser = await user.save();
        if(savedUser) {
            res.status(201).json({ success: true, data: savedUser });
        } else {
            res.status(201).json({ success: false, message: "User error!" });
        }
    } catch(error){
        res.status(500).json({ message: error });
    }
}

async function login(req, res) {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(user.password !== password) {
            res.status(400).json({ success: false, message: "Email or password invalid!" });
        } else {
            res.status(201).json({ success: true, data: user });
        }
    } catch(error){
        res.status(500).json({ message: error });
    }
}

module.exports = {
    register,
    login
}