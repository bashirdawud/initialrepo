const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()


app.get("/", (req, res) => {
    res.send("Hello World");
})

// checking server status

app.get("health-check", (res, req) =>{
    res.sendStatus(200);
})

const port = process.env.PORT || 8080;

app.listen(process.env.port, () =>{
    console.log(`Server is starting at port: ${port}`);
})

