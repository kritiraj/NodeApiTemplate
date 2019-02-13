const userService=require('./users.service');
const async= require('async');

const register=function(user,done){
    async.waterfall([
        userService.hashPassword.bind(null,user),
        userService.register
    ],done);    
}

const authenticate=async function(input,done){
    
    let user=await userService.findUser({'email':input.email})
    if(!user){ done({'message':"Not Found"})}
    
    let auth=await userService.comparePassword(user,input)
    if(!auth){ done({'message':'Authentication Failed'})}
    done(null,auth);
}


module.exports={register,authenticate};