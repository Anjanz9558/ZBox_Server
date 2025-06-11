const express = require("express");
const logger = require("./utils/logger");
const CONFIG = require("./config/config");
const adminRoutes = require("./routes/adminRoutes");
const frontendRoutes = require("./routes/frontendRoutes");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//  Admin Routes
adminRoutes.forEach((route) => {
  app.use(`/v1/admin${route.path}`, route.handler);
});

//  Frontend Routes
frontendRoutes.forEach((route) => {
  app.use(`/v1${route.path}`, route.handler);
});

// app.use(errorHandler);

module.exports = app;
