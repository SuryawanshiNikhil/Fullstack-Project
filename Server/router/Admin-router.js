const express=require("express");
const router=express.Router();
const adminController=require("../Controller/Admin-controller")
const authMiddleware=require("../middleware/Auth-middleware")
const adminMiddleware=require("../middleware/admin-middleware")
router.route('/users').get(authMiddleware,adminMiddleware,adminController.getAlluser);
router.route('/contacts').get(authMiddleware,adminMiddleware,adminController.getAllcontact);
router.route('/users/:id').get(authMiddleware,adminMiddleware,adminController.getuserbyId);
router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,adminController.updateUserID);
router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteByid);
router.route('/contacts/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deletecontactByid);
module.exports=router;