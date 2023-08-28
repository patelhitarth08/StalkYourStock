const stockInfo = require("../controllers/stockInfo");

// =========================

// using express
const express = require("express");
const app = express();

app.get("/stockDetails", stockInfo.info);

app.get("/name",stockInfo.nameInfo);
module.exports = app;
// ============================
