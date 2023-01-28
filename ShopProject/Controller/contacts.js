const path=require('path');
const routeDir=require('../Helper/path');
exports.ContactUsHere=(req, res, next)=>{
    res.sendFile(path.join(routeDir, 'ShopProject', 'view', 'ContactUs.html') );
};


exports.AddedRequest=(req, res, next)=>{
    res.sendFile(path.join(routeDir, 'ShopProject', 'view', 'RequestAdded.html') );
};
