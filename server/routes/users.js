const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/getUser', (req, res)=>{
    // var userName = req.body.userName;
    // var password = req.body.password;
    // var email = req.body.email;
    res.send("userName, password, email")

})

router.post('/createNewUser', (req, res)=>{
    var user ={
     "userName" : req.body.userName,
     "password" : req.body.password,
     "email" : req.body.email,
}

    res.send(user.userName + 'connected')

})
module.exports=router;