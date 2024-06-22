const express = require("express");
const mongodb = require('./data/database.js')
const bodyParser = require('body-parser')
const app = express();

const Port = process.env.Port || 8080;

app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
});
app.use("/", require("./routes"));

mongodb.main((err) => {
    if(err){
        console.log(err)
    } else{
        // app.listen(Port, () => console.log("Hello World"));
    }
})
app.listen(Port , () => {console.log(`Database is running on Port: ${Port}`)});



