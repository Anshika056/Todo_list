const express = require("express");
const todo = require("../models/todoSchema");
require("../database/connect");

exports.createtodo = async(req,res)=>{
 const{content} = req.body;

 if(!content){
     return res.send("enter the todo list");
 }
 try
 {
 const list = new todo({content});
 const newlist = await list.save();
 if(newlist)
  {
     res.status(200).json({message:"new todo list is created"});
         }
 else{
     res.send("something went wrong");
     }
 }
 catch(err){
     console.log(err);
 };

}