const con= require('../Connection/connection');

exports.getAlldata= function (req, res)
{
    res.redirect("/form.html");
};


exports.deleteuser= function (req, res)
{
    const deluser="delete from userdata where id=?";
    con.query(deluser, [req.query.ID], (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.redirect("/data");
        }
    })
};

exports.getUserData= function(req, res){
con.query("select * from userdata", (err, result)=>
   {
    if(err)
    {
        console.log(err);
    }
    else{
        res.render("read.ejs",{result});
    }
   }); 
}

exports.postUserData= ((req, res, next)=>{

    const name= req.body.name;
    const email= req.body.email;
    const mob= req.body.mno;

    con.connect(function(err){
        if(err)
        {
            console.log(err);
        }
        else{
            const sqlData = "INSERT INTO userdata (name, Email, mobile) VALUES (?, ?, ?)";
            con.query(sqlData, [name, email, mob], (error, result)=>{
                if(error)
                {
                    console.log(error);
                }
                else{
                    res.redirect("/data");
                }
            })
       
        }
    })
});



//module.exports= [getAlldata, deleteuser, getUserData, postUserData];