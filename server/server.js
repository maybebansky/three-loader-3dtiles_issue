const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Optional: serve files from current directory
// app.use(express.static('.'));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
