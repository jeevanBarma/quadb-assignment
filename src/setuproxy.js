const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3004; // Your local server's port

app.use(express.json());

app.get("/api/search", async (req, res) => {
  try {
    const response = await fetch("https://www.reed.co.uk/api/1.0/search", {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error searching for jobs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
