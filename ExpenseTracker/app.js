const con= require('./Connection/connection');
const routes= require('./Routes/trackingRoute');
const bodyParser =require('body-parser');
const express= require('express');
const dotenv= require("dotenv")
dotenv.config();


const app = express();
app.use(routes);
app.set("view engine", "ejs");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/views"));


app.listen(process.env.PORT|| 4000, (err)=>{
    if(err) throw err;

    console.log(`Server ${process.env.PORT} `);
});