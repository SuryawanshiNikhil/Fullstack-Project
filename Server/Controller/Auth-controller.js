const User =require ('../Model/user-model')
const bycript=require("bcrypt")

const registration = async(req,res,next)=>{
    try {
const {username,email,phone,password,isAdmin}=req.body
const userExist = await User.findOne({ email });
if (userExist) {
    return res.status(400).json({ message: "Email already exist\s" });
}

const saltRoud=10;
//const hash_pass=await bycript.hash(password,saltRoud);
const userCreated =await User.create({username,email,phone,password,isAdmin})
res.status(200).json({msg:userCreated ,token:await userCreated.generatetoken(),userId:userCreated._id.toString()})
    } 
    catch (error) {
        console.log(error)
    next(error)
    }
}


//login logic 

const login =async(req,res,next)=>{
    try {
    const {email,password}=req.body;
    const userExist=await User.findOne({email})
    if(!userExist){
        return res.status(400).json({message:"invalid credentia"})
    }

    const user=await userExist.comparepasswor(password)
if (user) {
    res.status(200).json({message:"login succefull",token:await userExist.generatetoken(),userId:userExist._id.toString()})

}
    
} catch (error) {
    next(error)
}
}
//to send user data =user logic

const user = async (req, res) => {
    try {
        const userData = req.user;
      console.log("hey",userData)
            return res.status(200).json({userData });
    
    } catch (error) {
        console.error(`Error found: ${error}`);
        res.status(500).json({ msg: "Server error" });
    }
};
module.exports={registration,login,user}