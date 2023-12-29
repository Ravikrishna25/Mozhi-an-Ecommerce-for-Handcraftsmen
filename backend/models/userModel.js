const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
    name:{
        type :String,
        required:[true,"Please enter name"]
    },
    email:{
        type :String,
        required:[true,"Please enter email"],
        unique: true,
        validate:[validator.isEmail,"Please enter valid email address"]
    },
    password:{
        type :String,
        required:[true,"Please enter password"],
        maxlength:[6,'password cannot exceed 6 characters'],
        select:false //it is an option to only show if we needed and not to show as a default data
    },
    avatar:{ 
        type:String,
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:{
        type:String 
    },
    resetPasswordTokenExpire:{
        type:Date
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

userSchema.pre("save",async function (next){
    if(!this.isModified('password')){   //if there is no change in password move t next
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);  //if there is a change in the password field on that time ony hash function is to be run
})

userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_TIME})
}

userSchema.methods.isValidPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.methods.getResetToken = function(){
    //generate token to reset a password
    const token = crypto.randomBytes(20).toString('hex'); //these letters becomes a hexadecimal

    //Generate hash and set to reset password token
    this.resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex')  //sha256 is a cryptography algorirhm which create a hash value  didest will generate a token according to its type


    //setexpire time 
    this.resetPasswordTokenExpire = Date.now()+30*60*1000;  //current milliseconds  it expires in 30minutes

    return token;

}


let model = mongoose.model("User",userSchema);

module.exports = model;