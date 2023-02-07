import express from "express";
import todoController from "../controllers/todo.js";

const router = express.Router();


router.get("/", todoController.getAllTodo);

router.get("/", todoController.isCompleted);

router.post("/", todoController.createTodo);

router.put("/:id", todoController.updateTodo);

router.delete("/:id", todoController.deleteTodo);

export default router;