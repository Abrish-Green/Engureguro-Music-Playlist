const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
var crypto = require('crypto');
const User = require('../model/User')
var _ = require('lodash/core');
var validator = require('validator');


// ADD ACCOUNT
router.post('/sign_up',async(req,res)=>{
    let data = req.body
    let error = []
    if(!data.password) 
        return res.status(202).json({"error":{password: "password can't be empty"}})

    if(error.length > 0){
        return res.status(202).json({
            "error":error
        })
    }

    const newUser = new User(req.body)
    newUser.setPassword(data.password)
    await newUser.save(function(err,result){
        if (err){
            return res.status(202).json(err);
        }
        else{
            return res.status(200).json(newUser.generateJWT())
             
        }
    })

    //store password
    //save
    
})

// EDIT ACCOUNT

// DELETE ACCOUNT

// LOGIN
router.post('/login',async(req,res)=>{

    const data = req.body
    if((!data.email || validator.isEmail(data.email) == false) || (!data.password))  {
        return res.status(202).json({"error": "Incorrect input"})
    }
    let user = await User.find({ email: data.email});

    if(user.length >0){
        //hash compare pass
        var inputHash = crypto.pbkdf2Sync(data.password, user[0].salt, 10000, 512, 'sha512').toString('hex');

        if(user[0].hash == inputHash){
            var tempUser = new User()
            tempUser.hash = user[0].hash
            tempUser.salt = user[0].salt
            var token =  tempUser.generateJWT();

            return res.status(200).json({
                "status":"success",
                "jwt_token": token,
                
            })
        }
        return res.status(402).json({
            "status":"failed",
            "error":"Incorrect Credential",
        }) 
    }
    
    return res.status(402).json({
        "status":"failed",
        "error":"Incorrect Credential"
    }) 

})
// LOGOUT

// RESET PASSWORD



module.exports = router