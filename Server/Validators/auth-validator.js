const {z}=require("zod")
const loginschema=z.object({
    email:z.string({required_error:"A email is required"}).trim().email({message:"invalid email adress"}).max(255,{message:"A max 255 word is allowed"}),
    password:z.string({required_error:"A password is required"}).trim().min(3,{message:"A min 3 name word"}).max(255,{message:"A max 255 word is allowed"}),

})
const signschema =loginschema.extend({
    username:z.string({required_error:"A name is required"}).trim().min(3,{message:"A min 3 name word"}).max(255,{message:"A max 255 word is allowed"}),
    phone:z.string({required_error:"A phone is required"}).trim().min(10,{message:"A minv 10 number required "}).max(11,{message:"phone not more than 11 numbe"}),
})
module.exports={signschema,loginschema};