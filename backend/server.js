const express = require("express");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 8081; // Use port from .env or default to 8000

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Enable JSON parsing

// Read products from JSON file
const products = JSON.parse(fs.readFileSync("./json/products.json", "utf-8"));

// Routes
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

app.get("/products", (req, res) => {
    res.json(products); // Return product list
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
