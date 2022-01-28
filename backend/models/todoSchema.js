const mongoose = require("mongoose");

const todo = mongoose.Schema({
    content:{
        type:String,
        required:true,
    }

},{timestamps:true});


const todos = mongoose.model("TODO",todo);
module.exports=todos;

