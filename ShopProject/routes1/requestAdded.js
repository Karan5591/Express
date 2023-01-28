const express= require('express');
const path=require('path');
const { builtinModules } = require('module');
const added=require('../Controller/contacts');
const routeDir=require('../Helper/path');
const router=express.Router();
router.get('/RequestAdded',added.AddedRequest);
module.exports=router;