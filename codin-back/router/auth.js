const express = require('express');
const { signupController, authenticateController } = require('../controller/auth');
const jwt = require('jsonwebtoken')

const router = express.Router();
const {ACCESS_TOKEN_SECRET} = process.env

router.post('/o/token', authenticateController);

router.post('/auth/signup', signupController);

router.get('/verify/:token', (req, res)=>{
    let {token} = req.params;
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded)=>{
        if(err){
            res.status(403).json({
                status: "ERROR",
                code: 403,
                message: err.message,
            });
        } else{
            res.status(200).json({
                status: "OK",
                code: 200,
                message: "Token verified successfully",
                data: {
                    username: decoded.user.split('-')[0],
                    password: decoded.user.split('-')[1]
                }
            });
        }
    })
})



module.exports = router