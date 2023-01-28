const express= require('express');
const path=require('path');
const { builtinModules } = require('module');
const routeDir=require('../Helper/path');
const router=express.Router();
router.get('/',(req, res, next)=>{
    res.sendFile(path.join(routeDir, 'ShopProject', 'view', 'shop.html') );
});
module.exports=router;