const express = require("express");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  var req_qeury = req.query;
  res.send(req_qeury);
});
app.post("/", (req, res) => {
  var req_body = req.body;
  res.send(
    Object.keys(req_body)
      .map((k) => `${k}: ${req_body[k]}`)
      .join("\n")
  );
});
app.put("/", (req, res) => {
  var req_body = req.body;
  res.send(
    Object.keys(req_body)
      .map((k) => `${k}: ${req_body[k]}`)
      .join("\n")
  );
});
app.delete("/", (req, res) => {
  var req_body = req.body;
  res.send(
    Object.keys(req_body)
      .map((k) => `${k}: ${req_body[k]}`)
      .join("\n")
  );
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
