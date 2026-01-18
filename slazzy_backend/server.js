const express = require("express");
const app = express();

app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.json({
    name: "Men Cotton T-Shirt",
    price: 499,
    try_available: true
  });
});

// Product list API
app.get("/products", (req, res) => {
  res.json([
    { name: "T-Shirt", price: 499, try_available: true },
    { name: "Jeans", price: 1299, try_available: false },
    { name: "Kurta", price: 899, try_available: true }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
