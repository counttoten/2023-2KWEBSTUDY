const express = require("express");
const router = require("./router");

const app = express();
const port = 3000;

app.use("/path", router);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
