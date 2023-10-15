const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    { email:{type:String}, 
      firstName:{type:String}, 
      lastName:{type:String}, 
      mobile:{type:String},
      password:{type:String}, 
      address:{type:String}, 
      roll:{type:String},
      class:{type:String}

    },

    {versionKey:false})


const studentsModel =mongoose.model("Students",DataSchema);

module.exports = studentsModel;
