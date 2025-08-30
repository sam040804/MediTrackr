// app.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Simulated "database" for donors
let donors = [
  { name: "Arjun", location: "Chennai", blood: "A+" },
  { name: "Priya", location: "Bangalore", blood: "O-" },
  { name: "Rahul", location: "Delhi", blood: "B+" },
  { name: "Meera", location: "Mumbai", blood: "AB+" }
];

// API route for searching donors
app.post("/searchdonors", (req, res) => {
  const { location, blood } = req.body;

  const results = donors.filter(d =>
    (!location || d.location.toLowerCase().includes(location.toLowerCase())) &&
    (!blood || d.blood === blood)
  );

  res.json(results);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 MediTrackr running at http://localhost:${PORT}`);
});
