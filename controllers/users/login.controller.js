const userSchema = require("../../schema/users.schema.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const {validationResult}=require('express-validator')
const login = async (req, res) => {
  try {
    const error=validationResult(req);
 
    const { phone_num, password } = req.body;
   
    if (!phone_num || !password)
      return res.json({ message: "PLease Enter valid detials" });
    const user = await userSchema.findOne({
      phone_num,
    });
    if (!user) return res.json({ message: "PLease singup first" });

    const cmp = await bcrypt.compare(password, user.password);
    if (!cmp) return res.json({ message: "phone number or password is incorrect" });

    const jwtToken = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "120d",
    });
    res.status(202).json({ message: "success", token: jwtToken });
  } catch (e) {
    res.status(404).send({ message: "error" });
  }
};

module.exports = login;
