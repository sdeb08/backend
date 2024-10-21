const moduleSchema=require("../../schema/module.schema");


const deleteModule=async (req,res) => {
    try {
        const { moduleId }=req.body;
        const modules=await moduleSchema.deleteOne({
            _id: moduleId,
        });
        res.status(200).json({
            message: "module deleted successfully",
        });

    } catch (e) {
        res.status(500).json({
            message: "internal server error",
        });

    }
};

module.exports=deleteModule;
