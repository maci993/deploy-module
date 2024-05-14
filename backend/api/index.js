const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Express on vercel")
})

app.listen(10000, () => console.log("App listening on port 10000"))
