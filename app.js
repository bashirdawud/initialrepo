const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("Starting a Nodejs Server");
});

// checking server status 
app.get("/health-check", (req, res) => {
    res.sendStatus(200);
})


const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is starting at port: ${PORT}`);
})