require("dotenv").config(); // Load environment variables at the top
const express = require("express");
const UserAuthRouter = require("./routes/UserAuthRouter");
const dbConnect = require("./lib/dbConnect");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

// CORS setup: Using the environment variable for the frontend URL
app.use(cors({ 
  origin: process.env.FRONTEND_URL || "http://localhost:5173", 
  credentials: true 
}));

// Routes
app.use("/user", UserAuthRouter);

// Connect to the database
dbConnect();

// Vercel will automatically assign the port, so we use process.env.PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
