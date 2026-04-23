const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    res.json({
        running: "Production"
    });
  } else {
    res.json({
        running: "Development"
    });
  }
});

app.get("/status", (req, res) => {
  res.json({
    status: "running",
    environment: process.env.NODE_ENV || "development",
  });
});

app.get("/info", (req, res) => {
  res.json({
    name: "Ajit's Deployment App",
    version: "1.0.0",
    author: "Ajit Mangsulikar",
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

if (process.env.NODE_ENV === "production") {
  console.log("Running in production mode");
} else {
  console.log("Running in development mode");
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
