const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const User = require('../model/User')


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
    await newUser.save(function(err,result){
        if (err){
            return res.status(202).json(err);
        }
        else{
            newUser.setPassword(data.password)
            return res.status(200).send(newUser.generateJWT())
             
        }
    })

    //store password
    //save
    
})

// EDIT ACCOUNT

// DELETE ACCOUNT

// LOGIN

// LOGOUT

// RESET PASSWORD



module.exports = router