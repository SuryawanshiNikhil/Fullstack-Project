const contact=require("../Model/contact-model")

const contactForm =async(req,res)=>{
try {
    const response=req.body;
    await contact.create(response)
    return res.status(200).json({message:"Succesffuly submitted"})
} catch (error) {
    console.log(error)
    return res.status(500).json({message:"unSuccesffuly creted"})

}
}
module.exports=contactForm;