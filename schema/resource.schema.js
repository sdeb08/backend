const mongoose=require("mongoose");
const { Schema }=mongoose;

var resource=new Schema({
    moduleId: {
        type: Schema.Types.ObjectId,
        require: true,
    },
    sectionId: {
        type: Schema.Types.ObjectId,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    url: {
        type: String,
    },
    type: {
        type: String,
        require: true,
    },
    updated_at: {
        type: Date,
        default: () => Date.now(),
    },
    created_at: {
        type: Date,
        default: () => Date.now(),
    },
});

resource.pre("save",function (next) {
    this.updated_at=Date.now();
    next();
});

module.exports=mongoose.model("resource",resource);
