
const User=require("../Model/user-model")
const Contact=require("../Model/contact-model")
const getAlluser = async(req,res,next)=>{
    try{
const users=await User.find({},{password:0});
if (!users|| users.lenght===0) {
    return  res.status(400).json({message:"user not "})
}
res.status(200).json(users)

    
} catch (error) {
    next(error);
}
}

//get user id
const getuserbyId =async(req,res,next)=>{
    try {
        const id=req.params.id;
     const data=   await User.findOne({_id:id},{password:0})
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
    }
    
    //delete by id
const deleteByid =async(req,res,next)=>{
    try {
        const id=req.params.id;
        await User.deleteOne({_id:id})
        return res.status(200).json({message:"delet e succesfully"})
    } catch (error) {
        next(error)
    }
    }
    const updateUserID = async (req, res, next) => {
        try {
            const id = req.params.id;
            const updateUserdata = req.body;
    
            const updateResult = await User.updateOne({ _id: id }, { $set: updateUserdata });
    
            // Check if the user was found and modified
            if (updateResult.nModified === 0) {
                return res.status(404).json({ message: "User not found or no changes made" });
            }
    
            // Fetch the updated user data to return
    
            return res.status(200).json(updateResult);
        } catch (error) {
            next(error); // Pass the error to the next middleware
        }
    };
    
const getAllcontact=async(req,res,next)=>{
    try{
        const contacts=await Contact.find();
    if (!contacts|| contacts.lenght===0) {
        return  res.status(400).json({message:"user not "})
    }
    res.status(200).json(contacts)
 
        
    } catch (error) {
        next(error);
    }
    
}
const deletecontactByid =async(req,res,next)=>{
    try {
        const id=req.params.id;
        await Contact.deleteOne({_id:id})
        return res.status(200).json({message:"delet e succesfully"})
    } catch (error) {
        next(error)
    }
}
module.exports={getAlluser,getAllcontact,deleteByid,getuserbyId,updateUserID,deletecontactByid};