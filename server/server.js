import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import path from "path";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());

app.use("/api/admin", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/api/enquiries", enquiryRoutes);

app.listen(5000, () =>
  console.log("Server running on port 5000")
);
