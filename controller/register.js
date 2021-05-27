const Register=require("../models/register");

exports.createCourse=(req,res)=>{
    console.log(req.body);
    const department=new Register(req.body);
    department.save((err,dept)=>{
        if(err){
            return res.status(400).json({
                error:"Not able to create department"
            })
        }
         res.json({ dept });
        //res.send('user saved sucuessfully');
    });
};

