const resourceSchema=require("../../schema/resource.schema");


const createResource=async (req,res) => {
    try {
        const {
            type,
            description,
            moduleId,
            sectionId,
            title,
            url
        }=req.body;
        if (!type||!description||!moduleId||!sectionId||!title||!url) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const resource=await resourceSchema.create({
            type,
            description,
            moduleId,
            sectionId,
            title,
            url
        });
        res.status(200).json(resource);

    } catch (e) {
        res.status(500).json({
            message: "internal server error",
        });

    }
};

module.exports=createResource;
