const UserSchema = require('./UserSchema');
const {model} = require('mongoose');

const UserModel = model('User', new UserSchema());




UserModel.createCollection();

module.exports = UserModel;