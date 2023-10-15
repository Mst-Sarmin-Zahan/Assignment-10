const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
    { 
        email:{type:String}, 
        otp:{type:String}, 
        status:{type:Number}
    },

    {versionKey:false})

const OTPModel =mongoose.model("OTP",DataSchema);

module.exports = OTPModel;