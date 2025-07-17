const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const dishesroutes = require("./routes/dishesroute");
const authRoutes = require("./routes/userroute");
const orders = require("./routes/orderroute");

const app = express();
const port = 5000;

// ✅ Swagger Configuration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Food Delivery API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"], // All route files with Swagger JSDoc
};

const openapiSpecification = swaggerJsdoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openapiSpecification));

// ✅ CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://fooddelivery-lmzi.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("❌ Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// FIXED: Changed app.options("*", cors()) to app.options("/*", cors()) for Express 5+
app.options("/*splat", cors());
// Alternatively, you can use:
// app.options("/*splat", cors());


// ✅ Express JSON Parser
app.use(express.json());

// ✅ Logger Middleware
app.use((req, res, next) => {
  console.log(
    "Time:",
    new Date().toISOString(),
    "| Method:",
    req.method,
    "| Path:",
    req.path
  );
  next();
});

// ✅ Routes
app.use("/api", dishesroutes);
app.use("/api/auth", authRoutes);
app.use("/api", orders);

// ✅ Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Food Delivery API!");
});

// ✅ MongoDB Connection
async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://vernekarvaishnav05:PmgggZIOflm6z024@foodapp.tqwojzl.mongodb.net/?retryWrites=true&w=majority&appName=foodapp"
    );
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
}
connectDB();

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
