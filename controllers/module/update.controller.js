const moduleSchema=require("../../schema/module.schema");


const updateModule=async (req,res) => {
    try {
        const { name,description,moduleId }=req.body;
        await moduleSchema.findOneAndUpdate(
            { _id: moduleId },
            { name,description }
        );
        res.status(200).json({
            message: "module updated successfully",
        });

    } catch (e) {
        res.status(500).json({
            message: "internal server error",
        });

    }
};

module.exports=updateModule;
