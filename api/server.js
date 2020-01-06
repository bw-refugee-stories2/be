const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router.js");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);

module.exports = server;
