const { Schema } = require("mongoose");

class UserSchema extends Schema {
    constructor() {
        super({
            username: {
                type: String,
                required: true,
                unique: true,
                minlength: 3,
                maxlength: 20,
                trim: true,
                lowercase: true,
            },
            password: {
                type: String,
                required: true,
                minlength: 8,
                maxlength: 20,
                trim: true,
            },
            email: {
                type: String,
                required: true,
                unique: true,
                trim: true,
                lowercase: true,
            },
            role: {
                type: String,
                enum: ['admin', 'user'],
                default: 'user',
            },
            
            created_at: {
                type: Date,
                default: Date.now,
            },
            updated_at: {
                type: Date,
                default: Date.now,
            },
        });
    }
}

module.exports = UserSchema;
