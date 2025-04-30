const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS (for local frontend access)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Example API route
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});