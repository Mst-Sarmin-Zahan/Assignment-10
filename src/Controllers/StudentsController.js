const StudentsModel = require("../Models/StudentsModel");

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
StudentsModel.create(Postbody,(err,data)=>{
    if(err){
        res.status(400).json({status:"fail",data:err})
    }else{
        res.status(201).json({status:"Success",data:data})
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
