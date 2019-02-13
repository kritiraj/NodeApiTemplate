const mongoose=require('mongoose');

let schema=new mongoose.Schema({
    email: {
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{collection:"userRegister"})

module.exports=mongoose.model('userRegister',schema);