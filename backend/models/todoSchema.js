const mongoose = require("mongoose");

const todo = mongoose.Schema({
    content:"string"
},{timestamps:true});


const todos = mongoose.model("TODO",todo);
module.exports=todos;

