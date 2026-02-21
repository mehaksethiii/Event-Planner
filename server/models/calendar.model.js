// models/calendar.model.js
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    description: {
      type: String,
      trim: true,
    },

    dueDate: {
      type: Date,
      required: true,
    },

    assignedTo: {
      type: String,
      trim: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },

    reminder: {
      type: Date,
    },
  },
  { timestamps: true }
);

TaskSchema.index({ user: 1, dueDate: 1 });

export const Task = mongoose.model("Task", TaskSchema);
