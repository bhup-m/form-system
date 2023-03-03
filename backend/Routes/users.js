const express = require("express");
const router = express.Router();
const {User} = require("../Models/userModel")
const Joi = require("joi")

router.post("/",async(req,res)=>{
    const schema = Joi.object({
        name:Joi.string(),
        password:Joi.string()
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = new User({
        name:req.body.name,
        password:req.body.password
    })

    await user.save();
    res.send(user)
});

module.exports = router