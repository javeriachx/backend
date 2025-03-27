const { Router } = require("express");
const { getTask, saveTask, updateTask, deleteTask } = require("../controllers/taskcontrollers");  // Correct path to controllers

const router = Router();

// Define routes
router.get("/tasks", getTask);
router.post("/tasks", saveTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;  // Export the router
