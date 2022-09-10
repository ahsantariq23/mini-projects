const express =require("express");
const https=require("https");
const bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
const port=3000;


app.get("/", function(req,res){
 res.sendFile(`${__dirname}/index.html`);
});


app.post("/", function(req , res){

    const query=req.body.cityName;
    const apiKey="73814f2bc21a78d98a4f36b83ac90ecd"
    const units="metric";
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;
   
      https.get(url, function(response){
      console.log(response.statusCode);
   
    response.on("data" , function(data){
     
      const weatherData= JSON.parse(data);
      const icons = weatherData.weather[0].icon;
      const iconURL= `http://openweathermap.org/img/wn/${icons}@2x.png`
      const temprature=weatherData.main.temp;
      res.write(`<h1>Temprature in ${query} is ${temprature}`);
      res.write(`<img src="${iconURL}" >`);
   
      res.send();
    })
   
    })
})

app.listen(port,function(){
    console.log(`Server is now working on port ${port}`);
});



 