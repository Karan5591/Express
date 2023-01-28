const express= require('express');
const path=require('path');
const contacted=require('../Controller/contacts');
const { builtinModules } = require('module');
const routeDir=require('../Helper/path');
const router=express.Router();
router.get('/ContactUs',contacted.ContactUsHere);
module.exports=router;