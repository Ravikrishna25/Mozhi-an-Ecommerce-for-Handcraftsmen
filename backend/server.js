const app = require("./app");
const path = require('path');
const connectDatabase = require("./config/database");

const options = {
    allowedHosts: ['localhost'], // Ensure it is a non-empty string like 'localhost'
    // other server options...
  };




connectDatabase();
 
const server = app.listen(process.env.PORT, () => {
    console.log(`the port is listened ${process.env.PORT}`)
})

process.on('unhandledRejection', (
    err) => {

    console.log("This error log is from server.js")
    console.log(`error name : ${err.name}`);
    console.log(`error stack : ${err.stack}`);

    console.log(`Error message: ${err.message}`); 
    console.log("Shutting down server due to unhandled rejection error");
    server.close(() => {
        process.exit(1);
    });

})

process.on('uncaughtException', (err) => {


    console.log(`Error : ${err.message}`);




    console.log("Shutting down server due to uncaught Exception error");
    server.close(() => {
        process.exit(1);
    });

})

