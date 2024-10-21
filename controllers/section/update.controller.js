
const sectionSchema=require("../../schema/section.schema");


const updateSection=async (req,res) => {
    try {
        const { name,description,sectionId }=req.body;
        await sectionSchema.findOneAndUpdate(
            { _id: sectionId },
            {
                name,
                description
            }
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

module.exports=updateSection;
