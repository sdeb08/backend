const { Router }=require('express');
const controller=require('../controllers/section/index.js');
const jwtAuth=require('../middlewares/jwt.middleware.js');
const isAdmin=require('../middlewares/isAdmin.middleware.js');

const router=Router();

router.route("/update").post(jwtAuth,isAdmin,controller.updateSection);
router.route("/create").post(jwtAuth,isAdmin,controller.createSection);
router.route("/delete").post(jwtAuth,isAdmin,controller.deleteSection);
router.route("/").post(jwtAuth,controller.getSection);


module.exports=router;