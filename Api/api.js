const express = require("express");
const { questionRouter } = require("./dataRoutes/questionsRoutes");

const apiRouter = express.Router();

apiRouter.use("/questions", questionRouter);

module.exports = apiRouter;
