const todo = require("../models/todoSchema");
require("../database/connect");


exports.createtodo = async(req,res)=>{                //creating a new todo list 
 const{content} = req.body;
 if(!content){
     return res.status(400).json("enter the todo list");
 }
 try{
      const list = new todo({content});
      const newlist = await list.save();                   //saving the created list in database
         if(newlist)
            {
               res.status(200).json({newlist});
            }
        else{
              res.status(400).json("todo was not created");
            }
    }catch(err){
         res.status(400).json("todo was not created");
         console.log(err);
 };

}

exports.getalltodo = async (req,res)=>{
   try{ 
    const data = await todo.find();                       //get all todos present inside the database
    if(data){ 
        res.status(200).json(data);
    }
    else{
        res.status(400).json({err:"rodo not found!"});
    }
}catch(err){
    res.status(400).json("Todo was not found");
}
}


exports.gettodobyid = async (req,res) =>{                       //getting data of specific id
 
 try{   
    const databyid = await todo.findById({_id:req.params.id});
    if(databyid){
        console.log(databyid)
        res.status(200).json(databyid);
    }
    else{
        res.status(400).json("todo not found");
    }
}catch(err){
    res.status(400).json("todo was not found");
}
}


exports.updatedata = async (req,res)=>{                       // update the todo list 
    try{
        const updatedata = await todo.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        )
          if(updatedata){
              res.status(200).json(updatedata);
          }
    else{
        res.status(400).json("data was'nt updated"); 
    }}
    catch(err){
        res.status(400).json("data was'nt updated");
    }
}

exports.deletetodo = async (req,res)=>{                      //delete the todo list
     try{
    const deltodo = await todo.findByIdAndDelete({_id:req.params.id})

    if(deltodo){
        res.status(200).json("todo has been deleted");
    }
    else{
        res.status(400).json("todo was not deleted");
    }
}catch(err){
    res.status(400).json("todo was not deleted");
}

}