require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const joinusRoutes = require("./routes/JoinusRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const profileRoutes = require("./routes/profileRoutes");
const joinAsStoreRoutes = require("./routes/joinAsStoreRoutes");
const statsRoutes = require("./routes/statsRoutes");

const storeRoutes = require("./routes/storeRoutes");
// const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/joinus", joinusRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/joinasstore", joinAsStoreRoutes);
////////////////////////////////////
app.use("/api/userRoutes", userRoutes);
////////////////////////////////////
app.use("/api/stores", storeRoutes);
// app.use("/api/products", productRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/products", productRoutes);


// اتصال بـ MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
