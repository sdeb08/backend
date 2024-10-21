const moduleSchema=require("../../schema/module.schema");


const createModule=async (req,res) => {
    try {
        const {
            name,
            description,
        }=req.body;
        if (!name||!description) {
            return res.status(400).json({
                message: "name and description is required",
            });
        }
        const module=await moduleSchema.create({
            name,
            description
        });
        res.status(200).json(module);

    } catch (e) {
        res.status(500).json({
            message: "internal server error",
        });

    }
};

module.exports=createModule;
