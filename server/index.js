const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend chạy OK");
});

app.listen(5000, () => console.log("Server chạy cổng 5000"));
