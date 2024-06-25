const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

const counterFile = "counter.json";

// Initialize the counter file if it doesn't exist
if (!fs.existsSync(counterFile)) {
  fs.writeFileSync(counterFile, JSON.stringify({ count: 0 }));
}

// Endpoint to get the current visitor count
app.get("/api/visitor-count", (req, res) => {
  const data = fs.readFileSync(counterFile);
  const { count } = JSON.parse(data);
  res.json({ count });
});

// Endpoint to increment the visitor count
app.post("/api/increment-visitor-count", (req, res) => {
  const data = fs.readFileSync(counterFile);
  let { count } = JSON.parse(data);
  count += 1;
  fs.writeFileSync(counterFile, JSON.stringify({ count }));
  res.json({ count });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
