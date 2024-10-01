const express=require("express")
const contatroute=express.Router();
const contactForm=require("../Controller/contact-controller")

contatroute.route("/contact").post(contactForm)

module.exports=contatroute;