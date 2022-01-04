const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({path:"./config.env"});                           //transported the env file

const PORT = process.env.PORT;                                  //port
require("../backend/database/connect")                          //database connection

const todoroutes = (require("../backend/routes/todo"));

app.use(express.json());                                        //to understand the json format in connect(middleaware) converts the data into the object
app.use(express.urlencoded({ extended: true }));

const todos=require("../backend/models/todoSchema");            //models 



app.use("/api",todoroutes);

 app.listen(PORT,() => {
     console.log(`server is running at ${PORT}`);
 })