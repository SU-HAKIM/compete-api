//? dependencies
const express = require("express");
require('./db/conn');
const router = require("./routers/student");

//? constants
const app = express();
const port = process.env.PORT || 3000;

//? middleware

app.use(express.json())
app.use(router)


//?listening server
app.listen(port, () => {
    console.log("listening on port "+port+" ....")
})