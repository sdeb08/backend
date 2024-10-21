

const isSuperAdmin = async (req, res, next) => {
    try {
        const {role}=req.admin;
        if(role!=="super_admin")
        return res.json({message:"error . You are not authorize"})
      next();
    } catch (e) {
      console.log(e);
      return res.json({ message: "server internal error" });
    }
  };
  
  module.exports = isSuperAdmin;
  