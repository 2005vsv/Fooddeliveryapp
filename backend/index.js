const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const dishesroutes = require("./routes/dishesroute");
// const dishRoutes = require("./routes/dishes");
const user = require("./routes/userroute");
const orders = require("./routes/orderroute");

const app = express();
const port = 5000;

// Swagger configuration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello World API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const openapiSpecification = swaggerJsdoc(options);

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openapiSpecification));

app.use((req, res, next) => {
  console.log("Time:", new Date().toISOString(), "| Method:", req.method, "| Path:", req.path);
  next();
});

// Routes
app.use("/api", dishesroutes);
app.use("/api", user);
app.use("/api", orders);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// MongoDB connection
async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/foodapp"

    );
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
}

connectDB();

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
