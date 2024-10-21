const { connect }=require("mongoose");
require("dotenv").config();

module.exports=async () => {
  try {
    const dbUrl=process.env.DB_URL;
    await connect(dbUrl,{ useNewUrlParser: true,useUnifiedTopology: true });
    console.log("mongodb database connected successfully");
  } catch (error) {
    console.log("database not connected",error);
  }
};
