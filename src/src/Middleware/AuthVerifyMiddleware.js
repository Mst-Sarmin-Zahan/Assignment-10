const jwt = require("jsonwebtoken");

module.exports=(req,res,next)=>{
    let Token = req.header["Token-Key"];
    jwt.verify(Token,"SecretKey123",(err,decoded)=>{
        if(err){
            res.status(401).json({status:"Unauthorized"})
        }else{
            let email = decoded["data"]["req.headers.email=email"];
            next();
        }
    })
}