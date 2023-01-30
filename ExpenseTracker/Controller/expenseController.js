const con= require('../Connection/connection');

exports.getAlldata= function (req, res)
{
    res.redirect("/form.html");
};


exports.deleteuser= function (req, res)
{
    const deluser="delete from expensedata where id=?";
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
con.query("select * from expensedata", (err, result)=>
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

    const amount= req.body.amount;
    const description= req.body.description;
    const category= req.body.category;

    con.connect(function(err){
        if(err)
        {
            console.log(err);
        }
        else{
            const sqlData = "INSERT INTO expensedata (Amount, Description, Category) VALUES (?, ?, ?)";
            con.query(sqlData, [amount, description, category], (error, result)=>{
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



