const UserSchema = require('./UserSchema');
const {model} = require('mongoose');

const UserModel = model('User', new UserSchema());




module.exports = UserModel;