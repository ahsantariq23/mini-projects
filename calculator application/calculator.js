const express=require("express");
const bodyParser=require("body-parser")
var app=express();
const port=4000;
 app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
   var num1=Number(req.body.num1);
   var num2=Number(req.body.num2);
   var result=num1+num2;
  res.send(`The result is ${result}`);
});

app.listen(port,function(){
    console.log(`server is on port ${port}`)
})
