const router=require('express').Router();
const userControl=require('./users.controller');


router.post('/signup',(req,res,next)=>{
    let user={...req.body};
    userControl.register(req.body,(err,result)=>{
            if(err){
                return res.status(500).json({'message':err})
            }
            return res.status(200).json({'message':result})
        })
})


router.post('/signin',(req,res,next)=>{
    userControl.authenticate(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({'message':err})
        }
        return res.status(200).json({'message':result})
    })
})


module.exports=router;