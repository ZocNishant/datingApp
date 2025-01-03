import express from "express";
import mongoose, { Schema } from "mongoose";
import Cards from "./dbCards.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 1111;

const app = express();

// Middleware
app.use(express.json());

// Database Config
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected.");
  })
  .catch((error) => {
    console.log(error.message);
    res.status(500).json({ message: "Server Error." });
  });

// API Endpoints
app.get("/dating/cards", async (req, res) => {
  try {
    const cards = await Cards.find({});
    res.status(200).json({ data: cards });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error." });
  }
});

app.post("/dating/cards", async (req, res) => {
  const dbCard = req.body;
  const newCard = new Cards(dbCard);
  try {
    await newCard.save();
    res.status(200).json({ data: newCard });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ message: "Server Error." });
  }
});

// Listener
app.listen(port, () => {
  console.log(`Server Started in port number ${port}.`);
});
