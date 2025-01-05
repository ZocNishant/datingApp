import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Cards from "./dbCards.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 1111;

// Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173/" }));

app.use((err, req, rest, next) => {
  res.status(500).json({ message: "Someting went wrong.", error: err.message });
});

// Database Config
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected.");
  })
  .catch((error) => {
    console.error("Database Connection Error:", error.message);
  });

// API Endpoints
app.get("/dating/cards", async (req, res) => {
  try {
    const cards = await Cards.find();
    res.status(200).json({ success: true, data: cards });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error." });
  }
});

app.post("/dating/cards", async (req, res) => {
  const { name, imgUrl } = req.body;

  if (!name || !imgUrl) {
    return res.status(400).json({ success: false, message: "Invalid data." });
  }
  try {
    const newCard = new Cards({ name, imgUrl });
    const savedCard = await newCard.save();
    res.status(201).json({ success: true, data: savedCard });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error." });
  }
});

// Listener
app.listen(port, () => {
  console.log(`Server Started in port number ${port}.`);
});
