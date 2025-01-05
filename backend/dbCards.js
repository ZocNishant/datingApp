import mongoose from "mongoose";

// Mongo Schema
const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  imgUrl: {
    type: String,
    required: [true, "Image is required."],
  },
});

export default mongoose.model("Cards", cardSchema);
