const express = require("express");
const mongodb = require('./data/database.js')
const app = express();

const Port = process.env.Port || 8080;


app.use("/", require("./routes"));


mongodb.main((err) => {
    if(err){
        console.log(err)
    } else{
        // app.listen(Port, () => console.log("Hello World"));
    }
})
app.listen(Port , () => {console.log(`Database is running on Port: ${Port}`)});



