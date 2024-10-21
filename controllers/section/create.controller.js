
const sectionSchema=require("../../schema/section.schema");


const createSection=async (req,res) => {
    try {
        const {
            name,
            description,
            moduleId,
        }=req.body;
        if (!name||!description||!moduleId) {
            return res.status(400).json({
                message: "name , description and moduleId is required",
            });
        }
        const section=await sectionSchema.create({
            name,
            description,
            moduleId
        });
        res.status(200).json(section);

    } catch (e) {
        res.status(500).json({
            message: "internal server error",
        });

    }
};

module.exports=createSection;
