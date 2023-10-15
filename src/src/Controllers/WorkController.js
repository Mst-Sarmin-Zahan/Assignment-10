const worksModel = require("../Models/WorksModel");
const jwt = require("jsonwebtoken")

exports.CreateWorkData=(req,res)=>{
    
    let reqbody = req.body;
    let title = reqbody["title"];
    let classNote =reqbody["classNote"];
    let description = reqbody["description"];
    let status = reqbody["status"];
    let email = reqbody["email"]
    
    const Postbody = {
        title:title, 
        classNote:classNote, 
        description:description, 
        status:status, 
        email:email 
      };
 worksModel.create(Postbody,(err,data)=>{
    if(err){
        res.status(400).json({status:"fail",data:err})
    }else{
        res.status(201).json({status:"Success",data:data})
    }
})      
}



exports.ReadWorkData = (req,res)=>{

    let email = req.headers["email"];
    
worksModel.find({email:email},(err,data)=>{
    if(err){
        res.status(400).json({status:"fail",data:err})
    }else{
        res.status(200).json({status:"Success",data:data})
    }
})      
}


exports.UpdateWorkData = (req,res)=>{
    
    let title = reqbody["title"];
    let classNote =reqbody["classNote"];
    let description = reqbody["description"];
    let status = reqbody["status"];
    let email = reqbody["email"];
    let id = req.body["-id"]
    
    const Postbody = {
        title:title, 
        classNote:classNote, 
        description:description, 
        status:status, 
        email:email 
      };
     


 
worksModel.UpdateOne({_id:id},{$set:postbody},{upset:true},(err,data)=>{
    if(err){
        res.status(400).json({status:"fail",data:err})
    }else{
        res.status(200).json({status:"Success",data:data})
    }
})      
}

exports.DeleteWorkData = (req,res)=>{
    let id=req.body["_id"]
 
worksModel.remove({_id:id},(err,data)=>{
     if(err){
         res.status(400).json({status:"fail",data:err})
     }else{
         res.status(201).json({status:"Success",data:data})
     }
 })      
 }
