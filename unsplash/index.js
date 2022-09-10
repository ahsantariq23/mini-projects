

let cliendId=`UaQ9unJr_T1n8QdTSOUpCz5_hbK1uxSl8ywyXt2Cnuc`;
let imgAdd=document.getElementById("img-section");
let apiCall=()=>{
   let extractImg="";

  let anyt=document.getElementById("img-input");
  const url=`https://api.unsplash.com/search/photos?query=${anyt.value}&client_id=${cliendId}&per_page=100`


  console.log(url);
   fetch(url).then(function(response){

    return response.json();


   }).then(function(data){
   data.results.forEach(function(index){

      extractImg +=` <div>
      <img src="${index.urls.regular}" >
      </div> `
      

     

   })
  
   }).then(function(){
    console.log(extractImg);
  
     document.getElementById("img-section").innerHTML=extractImg;
    })
}

document.addEventListener("keydown",function(e){
   if(e.key === `Enter`){
      e.preventDefault();
      apiCall();
   }
})
document.querySelector("header i").addEventListener("click" , apiCall);