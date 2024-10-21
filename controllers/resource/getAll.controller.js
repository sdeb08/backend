const resourceSchema=require("../../schema/resource.schema");



const getResource=async (req,res) => {
    try {
        const {
            sectionId,moduleId
        }=req.body;
        const modules=await resourceSchema.find({
            sectionId,moduleId
        });
        res.status(200).json(modules);

    } catch (e) {
        res.status(500).json({
            message: "internal server error",
        });

    }
};

module.exports=getResource;
