const loginUser=require('./login.controller.js');
const signupUser=require('./signup.controller.js');
const updateUser=require('./update.controller.js');
const getUser=require("./getUser.controller.js")

module.exports={
    signupUser,
    updateUser,
    loginUser,
    getUser,
}

