const {Router} =require('express');
const controller =require('../controllers/admin/index.js');
const jwtAuth=require('../middlewares/jwt.middleware.js')
const isSuperAdmin=require('../middlewares/isSuperAdmin.middleware.js')
const isAdmin=require('../middlewares/isAdmin.middleware.js')

const router = Router();

router.route("/login").post(controller.loginAdmin);
router.route("/").post(jwtAuth,isAdmin,controller.getAdmin);
router.route("/signup").post(jwtAuth,isSuperAdmin,controller.signupAdmin);

module.exports=router;