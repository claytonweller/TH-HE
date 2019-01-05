"use strict";
const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const jsonParser = bodyParser.json();
router.use(jsonParser);

// Hello person going through my code... these are just for us.
// Thanks for reading through everything. You're doing hard work
// and it's probably pretty boring. I hope people know how hard
// you work, and that you'll have a great day.

router.get("/", (req, res) => {
  const affirmations = [
    "You're a good person",
    "People like you",
    "The series of events that led to you existing could never be replicated. So you're truly unique.",
    "You deserve respect and love",
    "You know something that no one else knows. And that's kind of magical.",
    "You're great!"
  ];

  let chosenAffirmation =
    affirmations[Math.floor(Math.random() * affirmations.length)];
  res.status(200).json({ chosenAffirmation });
});

module.exports = { router };
