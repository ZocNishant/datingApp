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
    console.log(error);
  });

// API Endpoints
app.get("/dating/cards", (req, res) => {
  try {
    Cards.find();
  } catch (error) {
    console.log(error);
  }
});

app.post("/dating/cards", (req, res) => {
  try {
    const dbCard = req.body;

    Cards.create(dbCard);
  } catch (error) {
    console.log(error);
  }
});

// Listener
app.listen(port, () => {
  console.log(`Server Started in port number ${port}.`);
});
