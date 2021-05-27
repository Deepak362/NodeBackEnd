const mongoose=require("mongoose");

const registerSchema=new mongoose.Schema({
    name:{
        type:String,
       
    },
    email:{
        type:String,
       
    },
    mobile:{
        type:Number,
       
    },
    password:{
        type:String,
       
    }
    
},{ timestamps:true })
module.exports=mongoose.model("Register",registerSchema);
