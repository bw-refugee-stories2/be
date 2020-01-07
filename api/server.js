const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const storiesRouter = require("../stories/stories-router.js");
const usersRouter = require("../users/users-router.js");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ api: "Welcome to the Refugee Stories back end! 🎉" });
});

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/stories", storiesRouter);
server.use("/api/users", authenticate, usersRouter);

module.exports = server;
