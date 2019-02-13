const userModel=require('./users.entity');
const bcrypt=require('bcrypt');

const register=function(user,done){
    let userData=new userModel(user);
    userData.save((err,res)=>{
        if(err){
            done(err)
        }
        done(null,res);
    })
}

const hashPassword=function(user,done){
    const saltRounds=10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) done(err)
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) done(err);
            user.password=hash;
            done(null,user);
            // Store hash in your password DB.
        });
    });
}

const findUser=function(user,done){
    return userModel.findOne(user).exec()
        .then((data)=>{
            return data;
    },
    (e)=>{
        return e
    })
}

const comparePassword=function(user,input,done){
        return bcrypt.compare(input.password,user.password).then(function(res) {
            return res
        },
    (e)=>{
        return e
    });
}
module.exports={register,hashPassword,findUser,comparePassword}