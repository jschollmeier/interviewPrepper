

const path = require("path");
const router = require("express").Router();
const answerRoute = require("./answer-route");
const questionRoute = require("./question-route");

// API Routes
router.use("/api", answerRoute);
router.use("/api", questionRoute);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
