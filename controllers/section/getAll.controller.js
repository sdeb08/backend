
const sectionSchema=require("../../schema/section.schema");


const getSection=async (req,res) => {
    try {
        const { moduleId }=req.body;
        const modules=await sectionSchema.find({
            moduleId
        });
        res.status(200).json(modules);

    } catch (e) {
        res.status(500).json({
            message: "internal server error",
        });

    }
};

module.exports=getSection;
