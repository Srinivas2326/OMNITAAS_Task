const express = require("express");
const cors = require("cors");

const app = express();

// CORS configuration
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://omniitaas-task.vercel.app"
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Login API
app.post("/login", (req, res) => {

  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    return res.status(200).json({
      message: "Login successful",
      username
    });
  }

  return res.status(401).json({
    message: "Invalid username or password"
  });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});