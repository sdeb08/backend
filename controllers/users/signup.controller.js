const userSchema=require("../../schema/users.schema.js");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
require("dotenv").config();
const { validationResult }=require("express-validator");

const signup=async (req,res) => {
  try {
    const error=validationResult(req);

    const { name,phone_num,password }=req.body;
    if (!password)
      return res.json({ message: "please provide valid password" });
    const hashpass=await bcrypt.hash(password,10);

    const usr=await userSchema.find({ phone_num });

    if (usr.length) return res.json({ message: "error. user already exists" });
    const user=await userSchema.create({
      name,
      phone_num,
      role: "user",
      password: hashpass,
    });
    let jwtToken;
    if (user)
      jwtToken=jwt.sign(
        { user_id: user._id,role: "user" },
        process.env.JWT_SECRET
      );



    res.status(202).json({ message: "success",token: jwtToken });
  } catch (e) {
    console.log(e);
    res.status(404).send({ message: "error" });
  }
};

module.exports=signup;
