const express = require("express");
const app = express();

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
    res.sendFile("index.html");
})

const port = 6969;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})