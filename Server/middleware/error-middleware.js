const errorMidleware=(err,req,res,next)=>{
const status=err.status|| 500;
const message=err.message||"Backend error";
const extradetail=err.extradetail||"error from backend"
res.status(status).json({ message, extradetail });

}
module.exports=errorMidleware;