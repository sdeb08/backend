const userSchema = require("../../schema/users.schema.js");


const getUser = async (req, res) => {
  try {
    const { user_id } = req.admin;
   
    const user = await userSchema.findOne({ _id: user_id });
    res.status(202).json({ message: "success", data: user });
  } catch (e) {
    res.status(404).send({ message: "error" });
  }
};

module.exports = getUser;
