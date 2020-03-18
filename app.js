const express = require('express');
const app = express();
const dotenv = require('dotenv');
const postRoute = require("./controller/route");
dotenv.config();


app.get("/", postRoute)

// checking server status

app.get("/health-check",postRoute);

const port = process.env.PORT || 8080;

app.listen(process.env.port, () =>{
    console.log(`Server is starting at port: ${port}`);
})

