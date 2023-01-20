const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const {jwtsecret} = require('/Food Delivery App/food-delivery-app/src/passwords')

router.post('/createuser',
    [body('email').isEmail(),
    body('name').isLength({ min: 5 })
        , body('password').isLength({ min: 5 })]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const salt = await bcrypt.genSalt(10);
            let secpassword = await bcrypt.hash(req.body.password, salt);
            await User.create({
                name: req.body.name,
                password: secpassword,
                location: req.body.location,
                email: req.body.email
            })
            res.json({ success: true });
        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })






router.post('/loginuser'
    , [body('email').isEmail()
        , body('password').isLength({ min: 5 })]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userdata = await User.findOne({ email });
            if (!userdata) {
                return res.status(400).json({ errors: "Try logging with correct credentials" });
            }
            const comppassword = bcrypt.compare(req.body.password,userdata.password);
            if (!comppassword) {
                return res.status(400).json({ errors: "Try logging with correct credentials" });
            }

            const data={
                user:{
                    id:userdata.id
                }
            }
            const authtoken = jwt.sign(data,jwtsecret);

            return res.json({ success: true ,authtoken:authtoken});
        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })



module.exports = router;