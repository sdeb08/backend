const userRoute=require("./user.routes.js");
const adminRoute=require("./admin.routes.js");
const resourceRoute=require("./resource.routes.js");
const moduleRoute=require("./module.routes.js");
const sectionRoute=require("./section.routes.js");
const routes=(app) => {
  // v1
  app.use("/api/user",userRoute);
  app.use("/api/admin",adminRoute);
  app.use("/api/resource",resourceRoute);
  app.use("/api/section",sectionRoute);
  app.use("/api/module",moduleRoute);

};
module.exports=routes;
