const StudentsModel = require("../Models/StudentsModel");
const jwt = require("jsonwebtoken")

exports.CreateStudentData=(req,res)=>{
    
    let reqbody = req.body;
    
    const Postbody = {
        email:"yasa116025@gmail.com", 
        firstName:"Engr.Sarmin", 
        lastName:"Zahan", 
        mobile:"01727225499",
        password:"1234", 
        address:"Dhaka, Bangladesh", 
        roll:"01",
        class:"Graduated"
      };
StudentsModel.create(reqbody,(err,data)=>{
    if(err){
        res.status(400).json({status:"fail",data:err})
    }else{
        res.status(201).json({status:"Success",data:data})
    }
})      
}

//generate a token by jwt when the user login.

exports.userLogin=(req,res)=>{
    let email =req.body["email"];
    let password = req.body["password"];

    StudentsModel.find({email:email,password:password},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            if(data.length>0){

            //create auth token
            let payload={
                exp:Math.floor(Date.now/1000)+(60*60),
                data:data[0]
            }
            let Token = jwt.sign(payload,"SecretKey123");

            res.status(200).json({status:"success",Token:Token,data:data[0]})

            }else{
                res.status(401).json({status:"Unauthorized"})
            }
            
        }
    })     
}


exports.ReadStudentsData = (req,res)=>{

    let query ={},
    Projection = "title price discount"
    
StudentsModel.find(query,Projection,(err,data)=>{
    if(err){
        res.status(400).json({status:"fail",data:err})
    }else{
        res.status(201).json({status:"Success",data:data})
    }
})      
}


exports.UpdateStudentsData = (req,res)=>{

   let id=req.params.id;
   let query ={_id:id};
   let reqbody = req.body;
   const Postbody = {
    email:"yasa116025@gmail.com", 
    firstName:"Engr.Sarmin", 
    lastName:"Zahan", 
    mobile:"01727225499",
    password:"1234", 
    address:"Dhaka, Bangladesh", 
    roll:"01",
    class:"Graduated"
  };
 
StudentsModel.UpdateOne(query,reqbody,(err,data)=>{
    if(err){
        res.status(400).json({status:"fail",data:err})
    }else{
        res.status(201).json({status:"Success",data:data})
    }
})      
}

exports.DeleteStudentData = (req,res)=>{
    let id=req.params.id;
    let query ={_id:id};
 
StudentsModel.remove(query,(err,data)=>{
     if(err){
         res.status(400).json({status:"fail",data:err})
     }else{
         res.status(201).json({status:"Success",data:data})
     }
 })      
 }
