const express = require("express");
const statsRoutes = require("./routes/statsRoutes");
const dotenv = require("dotenv");
const dbConnect = require("./utils/dbConnect");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use("/", statsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
