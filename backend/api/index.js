const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`This is an enviroment variable: ${process.env.TEST}`)
})

app.listen(10000, () => console.log("App listening on port 10000"))
