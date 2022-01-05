// const express = require("express");
// const { find } = require("../models/todoSchema");
const todo = require("../models/todoSchema");
require("../database/connect");

exports.createtodo = async(req,res)=>{                //creating a new todo list 
 const{content} = req.body;

 if(!content){
     return res.send("enter the todo list");
 }
 try
 {
 const list = new todo({content});
 const newlist = await list.save();                   //saving the created list in database
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

exports.getalltodo = async (req,res)=>{
    const data = await todo.find({});                       //get all todos present inside the database
    if(data){ 
        res.status(200).json(data);
    }
    else{
        res.send({err:"sommething went wrong"});
    }
}

exports.gettodobyid = async (req,res) =>{                       //getting data of specific id
 
    const databyid = await todo.findById({_id:req.params.id});

    if(databyid){
        console.log(databyid)
        res.send(databyid);
    }
    else{
        res,send("something went wrong");
    }
}

exports.updatedata = async (req,res)=>{                       // update the todo list 
    const updatedata = await todo.findByIdAndUpdate({_id:req.params.id},req.body);
    
    if(updatedata){
        res.send(updatedata);
    }
    else{
        res.send("data was'nt updated"); 
    }
}

exports.deletetodo = async (req,res)=>{                      //delete the todo list

    const deltodo = await todo.findByIdAndDelete({_id:req.params.id})

    if(deltodo){
        res.send("todo has been deleted");
    }
    else{
        res.send("something went wrong");
    }

}