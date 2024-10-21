const mongoose=require("mongoose");
const { Schema }=mongoose;

var section=new Schema({
    moduleId: {
        type: Schema.Types.ObjectId,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    description: {
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

section.pre("save",function (next) {
    this.updated_at=Date.now();
    next();
});

module.exports=mongoose.model("section",section);
