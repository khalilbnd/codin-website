const jwt = require('jsonwebtoken');
const User = require('../../model/User/UserModel');
require('dotenv').config();

const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = process.env;

module.exports.authenticateController = async (req, res)=>{
    let {username, password, grant_type} = req.body;
    if(grant_type == "password"){
    try {
        const result = await User.findOne({
            username,
            password,
        });
        if (result) {
            const accessToken = jwt.sign({user: `${username}-${password}`}, ACCESS_TOKEN_SECRET, {expiresIn: '1m'});
            const refreshToken = jwt.sign({user: `${username}-${password}`}, REFRESH_TOKEN_SECRET);
            res.status(200).json({
                status: 'OK',
                code: 200,
                message: 'User logged in successfully',
                data: {
                    ...result._doc,
                    accessToken,
                    refreshToken,
                    expiresIn: "1m"
                },
            });
        } else {
            res.status(404).json({
                status: 'ERROR',
                code: 404,
                message: 'User not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'ERROR',
            code: 500,
            message: error.message,
        })
    }
    } else if(grant_type == "refresh_token"){
        let {refresh_token} = req.body;
        jwt.verify(refresh_token, REFRESH_TOKEN_SECRET, (err, decoded)=>{
            if(err){
                res.status(403).json({
                    status: "ERROR",
                    code: 403,
                    message: err.message,
                });
            } else{
                const accessToken = jwt.sign({
                    username: decoded.username,
                    role: decoded.role,
                }, ACCESS_TOKEN_SECRET, { expiresIn: '10h',});
                res.status(200).json({
                    status: "OK",
                    code: 200,
                    message: "Token refreshed successfully",
                    data: {
                        accessToken,
                    },
                });
            }
        });
    }
    else{
        res.status(400).json({
            status: "ERROR",
            code: 400,
            message: "Invalid grant type",
        });
    }
}
    
    


    module.exports.signupController = async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).json({
            status: 'OK',
            code: 201,
            message: 'User created successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            status: 'ERROR',
            code: 500,
            message: error.message,
        });
    }
}
