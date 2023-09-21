const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Ostara Tree Crystals");
});

const PORT = process.env.PORT || 7007;
app.listen(PORT, () => console.log("Crystal clear on", PORT));
