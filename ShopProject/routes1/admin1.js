const express=require('express');
const router=express.Router();
const path=require('path');

const routeDir=require('../Helper/path');

router.get('/add-product',(req, res, next)=>{
    res.send('<html><form action="/admin/add-product" method="POST"><input type="text" name="title"><br><br><button type="submit">send</button></form></html>');

    res.sendFile(path.join(__dirname, '../', 'ShopProject', 'view', 'add-product.html'));   
});
router.post("/add-product", (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
console.log(req.body);
res.redirect('/');
});

module.exports=router;