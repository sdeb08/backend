const resourceSchema=require("../../schema/resource.schema");



const deleteResource=async (req,res) => {
    try {
        const { resourceId }=req.body;
        await resourceSchema.deleteOne({
            _id: resourceId,
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

module.exports=deleteResource;
