module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === `development`) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            stack: err.stack,
            error: err
        })
    }


    if (process.env.NODE_ENV === `production`) {
        let message = err.message;
        // let error= {...err}
        let error = new Error(message);



        if (err.name == "ValidationError") {
            message = Object.values(err.errors).map(value => value.message)
            error = new Error(message)
            err.statusCode = 400
        }

        // if (err.name === "CastError") {
        //     // message = `Invalid ID: ${err.value}`;
        //     // error = new Error(message, 400);
        //     return res.status(400).json({
        //         success: false,
        //         message: "Invalid ID",
        //       });
        //   }  

        if (err.code === 11000) {

            // let message = `Duplicate error`;
            // error = new Error(message,400)
            err.statusCode = 400

            return res.status(err.statusCode).json({
                success: false,
                message: `Duplicate ${Object.keys(err.keyValue)} error`
            })

        }

        if (err.name === "JSONWebTokenError") {

            let message = `JSON Web Token is invalid.Try again`
            error = new Error(message)
            err.statusCode = 400
        }

        if (err.name === "TokenExpiredError") {
            let message = `JSON Web Token is Expired.Try again`
            error = new Error(message)
            err.statusCode = 400

        }



        return res.status(err.statusCode).json({
            success: false,
            message: err.message || `Internal server error`
        })
    }
}      