const express= require('express');
const path=require('path');
const { builtinModules } = require('module');
const routeDir=require('../Helper/path');
const router=express.Router();
router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(routeDir,'ShopProject', 'view', 'AddProduct.html') );
});
module.exports=router;