
const TaskModel = require("../models/taskmodels");

module.exports.getTask = async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.status(200).json(tasks);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err, message: "Something went wrong!" });
    }
};

module.exports.saveTask = async (req, res) => {
    try {
        const { task } = req.body;
        const newTask = await TaskModel.create({ task });
        res.status(201).json(newTask);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err, message: "Something went wrong!" });
    }
};

module.exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(id, { task }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found!" });
        }
        res.status(200).json(updatedTask);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err, message: "Something went wrong!" });
    }
};

module.exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTask = await TaskModel.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found!" });
        }
        res.status(200).json({ message: "Task deleted successfully!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err, message: "Something went wrong!" });
    }
};
