import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {
      type: String,
      required: [true, "O título do evento é obrigatório"]
    },
    address: {
      type: String,
      required: [true, "o endreço é obrigatória"],
    },
    description: {
      type: String,
    },
    date:{
      type: String,
      required: [true, "A data do evento é obrigatória"]
    },
    datecreated: {
      type: Date,
      default: Date.now,
      required: true,
      timestamp: true
    }
  }
);

const events= mongoose.model("events", eventsSchema);

export default events;