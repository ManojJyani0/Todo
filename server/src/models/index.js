import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    userId:{
        type: String,
        required: true,
    },
    title: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      default: "",
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    category:{
        type: String,
        default: "reqular",
    },
    priority:{
        type: Number,
      default: 1,
    }
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);