const Service=require('../Model/service-model');

const services=async(req,res)=>{
    try {
        const response=await Service.find();
        if (!response) {
            console.log("data is not found")
        }
        res.status(200).json({ msg: response });

    } catch (error) {
        
    }
}
module.exports= services;