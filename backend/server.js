const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// Login API
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (username === "admin" && password === "admin") {

        return res.status(200).json({
            message: "Login successful",
            username: username
        });

    } else {

        return res.status(401).json({
            message: "Invalid username or password"
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});