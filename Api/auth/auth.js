const express = require('express')
const router = express.Router()
var crypto = require('crypto');
const User = require('../model/User')
var validator = require('validator');
const { AuthUser } = require('../middleware/auth')

// ADD ACCOUNT
router.post('/sign_up',AuthUser, async(req,res)=>{
    const { password } = req.body
    let error = []
    if(!password) 
        return res.status(202).json({"error":{password: "password can't be empty"}})

    if(error.length > 0){
        return res.status(202).json({
            "error":error
        })
    }

    const newUser = new User(req.body)
    newUser.setPassword(password)
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
// LOGIN
router.post('/login',async(req,res)=>{

    const { email, password } = req.body
    if((!email || validator.isEmail(email) == false) || (!password))  {
        return res.status(202).json({"error": "Incorrect input"})
    }
    let user = await User.find({ email: email});

    if(user.length >0){
        //hash compare pass
        var inputHash = crypto.pbkdf2Sync(password, user[0].salt, 10000, 512, 'sha512').toString('hex');

        if(user[0].hash == inputHash){
            var tempUser = new User()
            tempUser.hash = user[0].hash
            tempUser.salt = user[0].salt
            
            var token =  tempUser.generateJWT();
            var today = new Date();
            var exp = new Date(today);
            exp.setDate(today.getDate() + 60);
            res.cookie("jwt_token", token, {
                httpOnly: true,
                maxAge: parseInt(exp.getTime() / 1000), // 3hrs in ms
              });
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