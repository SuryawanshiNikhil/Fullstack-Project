const jwt = require('jsonwebtoken');
const { preprocess } = require('zod');
const user=require('../Model/user-model')

const authMiddleware= async (req,res,next)=>{
const token=req.header("Authorization")
if (!token) {
    return res.status(401).json({msg:"Token not provide"})
}
const jwtTOken=token.replace("Bearer ","").trim();

console.log(token)

try {
    const isVerified=jwt.verify(jwtTOken,process.env.JWT_SECRET_KEY)
    const userData=await user.findOne({email:isVerified.email})
req.user=userData;
req.token=token;
req.users=userData._id;
    console.log("isVerified",isVerified)
    next();

} catch (error) {
    
}
}
module.exports = authMiddleware;