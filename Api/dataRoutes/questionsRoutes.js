const express = require("express");
const queModel = require("../../models/questions.js");

const questionRouter = express.Router();

questionRouter.post("/create", async (req, res) => {
  try {
    const data = req.body;

    const newQuestion = await queModel.create(data);

    res.status(201).json({
      message: "Question created successfully",
      question: newQuestion,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ errors: err.errors });
    }

    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

questionRouter.get("/singleque", async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "Question ID is required" });
    }

    const question = await queModel.findById(id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.status(200).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

questionRouter.get("/search", async (req, res) => {
  try {
    const { title } = req.query;

    let questions;
    if (title) {
      questions = await queModel.find({
        title: { $regex: title, $options: "i" },
      });
    } else {
      questions = await queModel.find(); // Return all questions if no title is provided
    }

    res.status(200).json({ questions });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

module.exports = { questionRouter };
