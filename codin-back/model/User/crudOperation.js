
module.exports.login = async (user, pass) => {
    try {
        const result = await User.findOne({
            username: user,
            password: pass,
        });
        if (result) {
            return {
                status: 'OK',
                code: 200,
                message: 'User logged in successfully',
                data: result,
            };
        } else {
            return {
                status: 'ERROR',
                code: 404,
                message: 'User not found',
            };
        }
    } catch (error) {
        return {
            status: 'ERROR',
            code: 500,
            message: error.message,
        }
    }
}