const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }
}, { timestamps: true });  // Added timestamps

module.exports = mongoose.model("Task", taskSchema);
