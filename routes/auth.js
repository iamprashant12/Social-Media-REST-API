const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post("/register", async function(req, res){ 
    try {
        // generate hashed password for storing in database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        //creating a new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        //saving the new user in database
        const user = await newUser.save();

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
})

router.post("/login", async function(req, res){
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json('User not found');

        const validPassword = await bcrypt.compare(req.body.password,user.password);
        !validPassword && res.status(400).json('Password mismatch');

        res.status(200).json(user);
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

module.exports = router;