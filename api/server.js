const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router.js");
const storiesRouter = require("../stories/stories-router.js");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/stories", storiesRouter);

module.exports = server;
