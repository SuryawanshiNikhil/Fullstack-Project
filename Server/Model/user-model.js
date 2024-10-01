const mongoose=require("mongoose")
const bycript=require("bcrypt")
const jwt=require("jsonwebtoken")
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin: {
        type: Boolean,  // Set as a boolean type
        required: false,
      }

})


userSchema.pre('save',async function(next){
    const user=this
    if (!user.isModified("password")) {
        next();
    }
    try {
        const saltRoud=await bycript.genSalt(12);

    const hash_pass=await bycript.hash(user.password,saltRoud);
    user.password=hash_pass;
    } catch (error) {
        next(error)
    }
})

//compare password
userSchema.methods.comparepasswor=async function (password){
   return bycript.compare(password,this.password)

}
userSchema.methods.generatetoken= async function(){
 try {
    return jwt.sign({
         userId:this._id.toString(),
      email:this.email,
      password:this.password,
        isAdmin:this.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
{ expiresIn: '300d' } 
)
} catch (error) {
     console.error(error)
    throw error;
 }

/*const jwt = require('jsonwebtoken');

/*const generateToken = (user) => {
    return jwt.sign(
        {
            userId: user._id.toString(),
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '300d' }
    );
};



// Example usage during login or registration
const token = generateToken(user);
if(token){
    return res.status(100).json({
        success: true,
        user: user,
        token: token,
    })
} else {
    return res.status(101).json({
        success: false,
        message: "token not found"
    })
}
console.log("Generated Token:", token);
console.log("user")

}
*/
}
const User=new mongoose.model("User",userSchema)
module.exports=User;