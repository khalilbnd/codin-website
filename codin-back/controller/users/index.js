const User = require('../../model/User/UserModel');


module.exports.getUsersController = async (req, res) => {
    try {
        const result = await User.find();
        res.status(200).json({
            status: 'OK',
            code: 200,
            message: 'Users fetched successfully',
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
module.exports.updateUserController = async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate(req.params.id, req
            .body, {
                new: true,
            });
        res.status(200).json({
            status: 'OK',
            code: 200,
            message: 'User updated successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'ERROR',
            code: 500,
            message: error.message,
        });
    }
}

module.exports.deleteUserController = async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'OK',
            code: 200,
            message: 'User deleted successfully',
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
module.exports.loginUserController = async (req, res) => {
    try {
        const result = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        });
        if (result) {
            res.status(200).json({
                status: 'OK',
                code: 200,
                message: 'User logged in successfully',
                data: result,
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
        });
    }
}
module.exports.logoutUserController = async (req, res) => {
    try {
        const result = await User.findById(req.params.id);
        if (result) {
            res.status(200).json({
                status: 'OK',
                code: 200,
                message: 'User logged out successfully',
                data: result,
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
        });
    }
}
