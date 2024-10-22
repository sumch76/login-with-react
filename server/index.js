const express = require("express");
const UserAuthRouter = require("./routes/UserAuthRouter");
const dbConnect = require("./lib/dbConnect");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

// Update the CORS origin to the deployed frontend URL
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173", credentials: true }));

require("dotenv").config();

// Routes
app.use("/user", UserAuthRouter);

dbConnect();

// Vercel will automatically assign the port, so we use process.env.PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
