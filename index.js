const express=require("express");
const cors=require("cors");
const routes=require("./routes/index.routes.js");
const db=require("./config/mongodb/connection.js");


require("dotenv").config();

const app=express();
var corsOptions={
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

const port=process.env.PORT||3002;

(async function () {
  await db();
  routes(app);

})();

app.listen(port,() => {
  console.log(`we are live on ${port}`);
});
