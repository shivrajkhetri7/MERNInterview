const express = require("express");
const PORT = 8000 || 8001;

const app = express();

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, () => {
  console.log(`Server running on the PORT ${PORT}`);
});
