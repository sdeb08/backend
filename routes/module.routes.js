const { Router }=require('express');
const controller=require('../controllers/module/index.js');
const jwtAuth=require('../middlewares/jwt.middleware.js');
const isAdmin=require('../middlewares/isAdmin.middleware.js');

const router=Router();

router.route("/update").post(jwtAuth,isAdmin,controller.updateModule);
router.route("/create").post(jwtAuth,isAdmin,controller.createModule);
router.route("/delete").post(jwtAuth,isAdmin,controller.deleteModule);
router.route("/").post(jwtAuth,controller.getModules);


module.exports=router;