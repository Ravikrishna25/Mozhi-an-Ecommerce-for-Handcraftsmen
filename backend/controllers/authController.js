const catchAsyncError = require("../middlewares/catchAsyncError")
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwt")
const sendEmail = require("../utils/email")
const crypto = require("crypto");
const { options } = require("../routes/auth");


 

 
//Register User - /api/v1/register
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    let avatar ;
    if(req.file){
        avatar = `${process.env.BACKEND_URL}/uploads/user/${req.file.originalname}`//to show in frontend user logo
    }
    const user = await User.create({
        name,
        email,
        password,
        avatar
        // "name":"ravi",
        // "email":"ravi@gmail.com",
        // "password":"rrrr",
        // "avatar":"image.jpg"
    });

    console.log("the user data is passed correct by auth")
    

    // const token = user.getJwtToken();

    // res.status(201).json({
    //     success: true,
    //     user,
    //     token : token
    // })
    sendToken(user, 201, res)
});


//login User  - /api/v1/login
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email and Password", 400));

    }

    //finding the user in database
    const user = await User.findOne({ email }).select('+password');//only to sow the password not all the time

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    if (!await user.isValidPassword(password)) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }
    sendToken(user, 201, res);

})


//LogOut Api - {{Base_Url}}/api/v1/logout
exports.logoutUser = (req, res, next) => { //if we remove cookie ,then it is assumed as not a user
    res.cookie('token', null, {
        expires: new Date(Date.now()),  //we giving at present time so that it expires on now
        httpOnly: true
    }).status(200)
        .json({
            success: true,
            message: "Logged Out"
        })
}



//Forgot Password controller  -  {{Base_Url}}/api/v1/password/forgot
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });


    if (!user) {
        return next(new ErrorHandler("User not found with this email", 404));
    }

    const resetToken = user.getResetToken();
    await user.save({ validateBeforeSave: false });

    //create a reset url
    const resetUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`  //  http://127.0.0.1/api/v1/password/reset/{token}      req.protocol returns http or https  req.get(host) - 127.0.0.1  


    const message = `Your reset token url is as \n\n ${resetUrl} \n\n If you have not requested this email,then ignore it.`

    try {
        sendEmail({
            email: user.email,
            subject: "Mozhi Password Recovery",
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email}`
        })


    } catch (error) {
        user.resetPasswordToken = undefined   //if it failed,the it means mail is not sent
        user.resetPasswordTokenExpire = undefined;


        await user.save({ validateBeforeSave: false });


        return next(new ErrorHandler(error.message), 500);
    }


})



//reset password - {{Base_Url}}/api/v1/password/reset/:token
exports.resetPassword = catchAsyncError(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordTokenExpire: {
            $gt: Date.now()
        }
    })

    if (!user) {
        return next(new ErrorHandler("Password Reset Token is invalid or expired!!!"))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password Does not match"));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined
    user.resetPasswordTokenExpire = undefined;
    await user.save({validateBeforeSave:false});
    sendToken(user, 201, res);


})


//Get User Profile - api/v1/myprofile
exports.getUserProfile = catchAsyncError(async (req,res,next)=>{
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user
    })
})


//change user password
exports.changePassword = catchAsyncError(async (req,res,next)=>{
    const user = await User.findById(req.user.id).select('+password');


    //check old password is matching or not we already checked this in usermodal as isvalidpassword
    if(!await user.isValidPassword(req.body.oldPassword)){
        return next(new ErrorHandler("Incorrect old password",401));
    }

    //assigning new password - api/vi/password/change
    user.password = req.body.password;
    await user.save();

    res.status(200).json({
        success:true,
    })    


})

//updateProfile
exports.updateProfile = catchAsyncError(async (req,res,next) =>{

    let newUserData = {
        name : req.body.name,
        email: req.body.email

    }

    let avatar ;
    if(req.file){
        avatar = `${process.env.BACKEND_URL}/uploads/user/${req.file.originalname}`//to show in frontend user logo
        newUserData={...newUserData,avatar};
    }

    const user = await User.findByIdAndUpdate(req.user.id,newUserData,{
        new:true, //to return new value and not to return old values
        runValidators : true

    })

    res.status(200).json({
        success:true,
        user
    })

})


//Admin: Get aLL users -- {{Base_Url}}/api/v1/admin/users
exports.getAllUsers = catchAsyncError(async (req,res,next)=>{
    const users = await User.find();
    res.status(200).json({
        success:true,
        users,
    })
    
})


//Admins: Get Specific User -- api/v1/admin/user/:id
exports.getUser = catchAsyncError(async (req,res,next)=>{
    const user = await User.findById(req.params.id);
    if(!user){
        return next(new ErrorHandler(`User not found with this ${req.params.id}`));
    }

    res.status(200).json({
        success:true,
        user,
    })


})


//Admins: Update User - api/v1/admin/user/:id
exports.updateUser = catchAsyncError(async (req,res,next)=>{
    const newUserData = {
        name : req.body.name,
        email: req.body.email,
        role: req.body.role

    }

    const user = await User.findByIdAndUpdate(req.params.id,newUserData,{
        new:true, //to return new value and not to return old values
        runValidators : true

    })

    res.status(200).json({
        success:true,
        user
    })

});

//Admin - Delete user -- api/v1/admin/user/:id
exports.deleteUser = catchAsyncError(async (req,res,next)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
        return next(new ErrorHandler(`User not found with this ${req.params.id}`));
    }



    res.status(200).json({
        success:true,
    })
});