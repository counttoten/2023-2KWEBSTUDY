const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.send("GET /"));
router.post("/", (req, res) => res.send("POST /"));
router.get("/1", (req, res) => res.send("<h1>제목</h1>"));
router.post("/1", (req, res) => res.send("POST /1"));

module.exports = router;
