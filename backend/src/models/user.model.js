const { Schema, model } = require("mongoose");
const validator = require("validator");


const UserSchema = new Schema({
    name: {type: String, required: true},

    email: {
        type : String,
        required: true,
        unique: true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },

    bio: {
            type: String, 
            min: 0,
            max: 200
        },
}, {
    timestamps: true,
    versionKey: false,
})

const UserModel = model("user", UserSchema);

module.exports = UserModel;