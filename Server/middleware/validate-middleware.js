const validate=(schema)=>async (req,res,next)=>{
    try {
        const parsebody=await schema.parseAsync(req.body)
        req.body=parsebody;
        next()
    } catch (err) {
        const  status=422;
        const  message="fill the input properly"
        const  extradetail=err.errors[0].message;
        const error={
            status,
            message,
            extradetail,
        }
next(error)
    }
}
module.exports=validate;