const adminSchema = require("../../schema/admin.schema.js");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await adminSchema.findOne({
      email,
    });
    if (!admin) return res.json({ message: "you are not authorized" });

    const cmp = bcrypt.compare(password, admin.password);
    if (!cmp) return res.json({ message: "you are not authorized" });

    const jwtToken = jwt.sign(
      { user_id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "120d" }
    );
    res.status(202).json({ message: "success", token: jwtToken });
  } catch (e) {
    console.log(e)
    res.status(404).send({ message: "error" });
  }
};

module.exports = login;
