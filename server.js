const express = require('express');
const fs = require('fs/promises'); // For reading files asynchronously
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

app.get('/api/products/:id/:attribute', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const attribute = req.params.attribute;
  
      const file = await fs.readFile('products.json', 'utf-8');  // Adjust the path if needed
      const products = JSON.parse(file);
      const product = products.find(p => p.id === id);
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      if (!(attribute in product)) {
        return res.status(400).json({ error: 'Attribute not found on product' });
      }
  
      res.json({ [attribute]: product[attribute] });
    } catch (err) {
      console.error(err);  // Logs server-side errors to the console
      res.status(500).json({ error: 'Server error' });
    }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
