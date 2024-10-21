const adminSchema = require("../../schema/admin.schema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const ifAdmin = await adminSchema.findOne({ email });
    if (ifAdmin) return res.json({ message: " admin already exist" });
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    const admin = await adminSchema.create({
      email,
      password: hashPass,
      role: "admin",
    });
    const jwtToken = jwt.sign(
      { user_id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "120d" }
    );
    res.status(202).json({ token: jwtToken });
  } catch (e) {
    res.status(404).send({ message: "error" });
  }
};

module.exports = signUp;
