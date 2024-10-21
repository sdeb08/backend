const {Router} =require('express');
const controller =require('../controllers/users/index.js');
const jwtAdmin=require('../middlewares/jwt.middleware.js')
const {body} =require('express-validator')

const router = Router();

router.route("/update").post(jwtAdmin,controller.updateUser);
router.route("/signup").post([body('phone_num').isMobilePhone()],controller.signupUser);
router.route("/login").post([body('phone_num').isMobilePhone()],controller.loginUser);
router.route("/").post(jwtAdmin,controller.getUser);


module.exports=router;