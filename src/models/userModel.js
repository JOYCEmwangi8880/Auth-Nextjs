import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        typeof: 'string',
        required: [ true,"provide a username"],
        undefined: true,
    },
    email:{
        type: 'string',
        required: [ true,"provide an email"],
        unique: true,
    },
    password:{
        type: 'string',
        required: [ true,"provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    forgotpasswordToken:{
        forgotpasswordTokenexpiry: Date,
        verifyToken: String,
        verifyTokenExpiry: Date,

    }

})

const User = mongoose.models.users ||mongoose.models("users", userSchema);


export default User;