const jwt= require('jsonwebtoken');
const config=require('../config/config');

const authorize=function(req,res,next){

    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.JWT.SECRET_KEY, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    console.log(decoded);
    next(); 
    })
}
module.exports=authorize;