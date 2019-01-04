"use strict";
const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const jsonParser = bodyParser.json();
router.use(jsonParser);

router.get("/", (req, res) => {
  return res.status(200).json({ message: "GET route works" });
});

router.post("/", (req, res) => {
  return res.status(200).json({ message: "POST route works" });
});

module.exports = { router };
