const adminSchema=require("../../schema/admin.schema.js");
const mongoose=require("mongoose");

const getAdmin=async (req,res) => {
  try {
    const { user_id }=req.admin;
    const admin=await adminSchema.findOne({
      _id: user_id,
    });

    res.status(202).json({ message: "success",data: admin });
  } catch (e) {
    console.log(e)
    res.status(404).send({ message: "error" });
  }
};

module.exports=getAdmin;
