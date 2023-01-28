const http=require('http');
const bodyParser=require('body-parser')
const express=require ('express');
const app= express();
const path=require('path');

const adminRoute=require('./ShopProject/routes1/admin1');
const shopRoutes=require('./ShopProject/routes1/shop')
const contactRoutes=require('./ShopProject/routes1/contactUs')
const productRoutes=require('./ShopProject/routes1/add-product')
const RaRoutes=require('./ShopProject/routes1/requestAdded')
app.use(bodyParser.urlencoded({extended: false})); 
app.use(express.static(path.join(__dirname, 'ShopProject','public')));


app.use('/admin1', adminRoute);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(productRoutes);
app.use(RaRoutes);
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'ShopProject', 'view', '404.html'));
});

app.listen(3000);



// const bodyParser=require('body-parser')
// const express= require('express');
// const chatapp= express();

// const user1=require('./ChatApp/user');
// const main=require('./ChatApp/main')

// chatapp.use(bodyParser.urlencoded({extended: false}));
// chatapp.use(user1);
// chatapp.use(main);
// chatapp.use((req, res, next)=>{
//     res.status(404).send('<h1>Page not found</h>')
// });

// chatapp.listen(3000);