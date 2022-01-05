const express = require("express");
const { createtodo,getalltodo, gettodobyid, updatedata, deletetodo } = require("../controllers/todo");
const router = express.Router();

router.post("/create",createtodo);   
router.get("/getalldata",getalltodo);
router.get("/getbyid/:id",gettodobyid);
router.put("/update/:id",updatedata);
router.delete("/delete/:id",deletetodo);


module.exports=router;