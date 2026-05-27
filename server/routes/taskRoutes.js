const express=require("express");

const router=express.Router();

const auth=require(
"../middleware/authMiddleware"
);

const{
getTasks,
createTask,
deleteTask,
completeTask


}=require(
"../controllers/taskController"
);

router.get("/",auth,getTasks);

router.post("/",auth,createTask);

router.delete(
"/:id",
auth,
deleteTask
);

router.put(
"/:id",
auth,
completeTask
);

module.exports=router;