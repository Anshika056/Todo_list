const express = require("express");
const { createtodo } = require("../controllers/todo");
const router = express.Router();

router.post("/create",createtodo);


module.exports=router;