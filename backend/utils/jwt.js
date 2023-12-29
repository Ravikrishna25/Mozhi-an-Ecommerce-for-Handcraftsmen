const sendToken = (user,statusCode,res)=>{
    
    //creatinng jwt token
    const token = user.getJwtToken();

    //setting cookie for sending token
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME *24*60*60*1000), //7days denoting in a milliseconds
        httpOnly: true, //defined to use cookie only via hhtp request

    }



    res.status(statusCode)
    .cookie('token',token,options)
    .json({
        success:true,
        token,
        user
    })

}

module.exports = sendToken