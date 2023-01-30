const con= require('../Connection/connection');
const express= require("express");
const router=express.Router();
const getdata=require("../Controller/bookingController")

router.get("/", getdata.getAlldata);
// router.use(express.static(__dirname+"/public"));
// router.use(express.static(__dirname+"/views"));


const bodyParser =require('body-parser');


router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));


router.get("/delete-data", getdata.deleteuser);
router.get("/data", getdata.getUserData);
router.post("/form", getdata.postUserData);


module.exports=router;