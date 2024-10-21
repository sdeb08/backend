const resourceSchema=require("../../schema/resource.schema");


const updateResource=async (req,res) => {
    try {
        const { title,description,resourceId,url }=req.body;
        await resourceSchema.findOneAndUpdate(
            { _id: resourceId },
            { title,description,url }
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

module.exports=updateResource;
