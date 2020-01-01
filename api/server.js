const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const storiesRouter = require("../stories/stories-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/stories", storiesRouter);

module.exports = server;
