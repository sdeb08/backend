const moduleSchema=require("../../schema/module.schema");


const getModules=async (req,res) => {
    try {
        const modules=await moduleSchema.find();
        res.status(200).json(modules);

    } catch (e) {
        res.status(500).json({
            message: "internal server error",
        });

    }
};

module.exports=getModules;
