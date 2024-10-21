const mongoose=require("mongoose");
const { Schema }=mongoose;

var module=new Schema({
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

module.pre("save",function (next) {
    this.updated_at=Date.now();
    next();
});

module.exports=mongoose.model("module",module);
