const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    { 
        title:{type:String}, 
        classNote:{type:String}, 
        description:{type:String}, 
        status:{type:String}, 
        email:{type:String} 
        
    },

    {versionKey:false})

const worksModel =mongoose.model("Works",DataSchema);

module.exports = worksModel;
