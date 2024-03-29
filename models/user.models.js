const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    fullName: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    },
    profilePicture: {
        type:String,
        required: true,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    verified: {
        type:Boolean,
        default: false,
    }
}, 
{
    timestamps: true
})

const UserModel = model('User', UserSchema);
module.exports = UserModel;