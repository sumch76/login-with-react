const express = require("express");
const {
  signup,
  login,
  logout,
  get,
  myDetails,
} = require("../controllers/UserAuthController");
const { verifyToken } = require("../middlewares/verifytoken");
const UserAuthRouter = express.Router();
UserAuthRouter.get("/",get)
UserAuthRouter.post("/signup", signup);
UserAuthRouter.post("/login", login);
UserAuthRouter.post("/logout", logout);

UserAuthRouter.get("/my-details", verifyToken, myDetails);

module.exports = UserAuthRouter;