const userService=require('./users.service');
const async= require('async');

const register=function(user,done){
    async.waterfall([
        userService.hashPassword.bind(null,user),
        userService.register
    ],done);    
}


module.exports={hashPassword,register};