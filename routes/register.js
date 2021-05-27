const express=require("express");
const router=express.Router();

const{createCourse}=require("../controller/register");


router.post("/course/create",createCourse);

module.exports=router;