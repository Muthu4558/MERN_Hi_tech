import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    content: String,
    category: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
