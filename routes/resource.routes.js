const { Router }=require('express');
const controller=require('../controllers/resource/index.js');
const jwtAuth=require('../middlewares/jwt.middleware.js');
const isAdmin=require('../middlewares/isAdmin.middleware.js');

const router=Router();

router.route("/update").post(jwtAuth,isAdmin,controller.updateResource);
router.route("/create").post(jwtAuth,isAdmin,controller.createResource);
router.route("/delete").post(jwtAuth,isAdmin,controller.deleteResource);
router.route("/").post(jwtAuth,controller.getResource);


module.exports=router;