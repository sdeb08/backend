const userSchema = require("../../schema/users.schema.js");

const updateUser = async (req, res) => {
  try {
    const user_id = req.token;
    const { name, phone_num } = req.body;
    const user = await userSchema.updateOne(
      {
        phone_num,
      },
      name
    );
    
    res.status(202).json(user);
  } catch (e) {
    res.status(404).send({ message: "error" });
  }
};

module.exports = updateUser;
