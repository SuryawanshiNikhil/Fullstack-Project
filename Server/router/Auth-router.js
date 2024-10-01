const express=require("express")
const router=express.Router();
const authC=require("../Controller/Auth-controller")
const {signschema,loginschema}=require("../Validators/auth-validator")
const validate=require("../middleware/validate-middleware")
const authMiddleware=require("../middleware/Auth-middleware")
router.route('/register').post(validate(signschema), authC.registration)
router.route('/login').post(validate(loginschema),authC.login)
router.route('/user').get(authMiddleware,authC.user)

    module.exports=router;