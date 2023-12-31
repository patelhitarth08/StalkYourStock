const portfolioController = require("../controllers/portfolioController");

// =========================

// using express
const express = require("express");
const app = express();

app.get("/", portfolioController.addPortfolio);
app.get("/get", portfolioController.getPortfolio);

module.exports = app;
// ============================
