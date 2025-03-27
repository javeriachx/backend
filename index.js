const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();  // To load environment variables from .env file
const cors = require("cors");

// Import routes (Ensure that the file name matches exactly with the file in your routes folder)
const routes = require('./routes/taskroutes');  // Ensure this path is correct

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Basic test route to check if server is running
app.get("/", (req, res) => {
    res.send("Hi javeria");
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://139.135.32.173:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log("Error connecting to MongoDB:", err));

// Use the task routes
app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🔥`);
});
