const adminMiddleware=(req,res,next)=>{
    try {
        console.log(req.user)
        const adminRole=req.user.isAdmin;
        if (!adminRole) {
          return  res.status(200).json({message:"invalid crendential"})

        }
        next();
    } catch (error) {
        next(error)
    }

}
module.exports= adminMiddleware;