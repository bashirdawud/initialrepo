const express = require('express');
const app = express();
const dotenv = require('dotenv');
const postRouter = require("./controller/route");
dotenv.config()


app.get("/", postRouter)

// checking server status

app.get("/health-check",postRouter );

const port = process.env.PORT || 8080;

app.listen(process.env.port, () =>{
    console.log(`Server is starting at port: ${port}`);
})

