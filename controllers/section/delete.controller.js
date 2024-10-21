
const sectionSchema=require("../../schema/section.schema");


const deleteSection=async (req,res) => {
    try {
        const { sectionId }=req.body;
        await sectionSchema.deleteOne({
            _id: sectionId,
        });
        res.status(200).json({
            message: "section deleted successfully",
        });

    } catch (e) {
        res.status(500).json({
            message: "internal server error",
        });

    }
};

module.exports=deleteSection;
