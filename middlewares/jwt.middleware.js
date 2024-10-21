const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtAuth = async (req, res, next) => {
  try {
    let authToken = req.headers["authorization"].split(" ")[1];
    if (authToken == null) {
      return res.json({ message: "Please provide auth token" });
    }
    const data = await jwt.verify(authToken, process.env.JWT_SECRET);
    req.admin = data;
    next();
  } catch (e) {
    console.log(e);
    return res.json({ message: "server internal error" });
  }
};

module.exports = jwtAuth;
