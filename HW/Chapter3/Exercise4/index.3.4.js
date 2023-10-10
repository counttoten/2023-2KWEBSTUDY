const express = require("express");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.get("/", (req, res) => res.render("login.pug"));

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  res.send(`username: ${username}, password: ${password}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
