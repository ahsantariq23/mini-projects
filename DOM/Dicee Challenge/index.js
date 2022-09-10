let randomNumber1 =Math.random(); //0-0.9999
randomNumber1 *= 6;   //0-5.999
randomNumber1 = Math.floor(randomNumber1)+1;
//for 1
if(randomNumber1===1){
 let image=document.querySelector(".container .img1").setAttribute("src", "images/dice1.png");
}
//for 2
else if(randomNumber1===2){
    let image=document.querySelector(".container .img1").setAttribute("src", "images/dice2.png");
   }
//for 3
else if(randomNumber1===3){
    let image=document.querySelector(".container .img1").setAttribute("src", "images/dice3.png");
   }
//for 4
else if(randomNumber1===4){
    let image=document.querySelector(".container .img1").setAttribute("src", "images/dice4.png");
   }
//for 5
else if(randomNumber1===5){
    let image=document.querySelector(".container .img1").setAttribute("src", "images/dice5.png");
   }
//for 6
else{
    let image=document.querySelector(".container .img1").setAttribute("src", "images/dice6.png");
}

/*************************************************************************************************************/

let randomNumber2 =Math.random(); //0-0.9999
randomNumber2 *= 6;   //0-5.999
randomNumber2 = Math.floor(randomNumber2)+1;
console.log(randomNumber2);
//for 1
if(randomNumber2===1){
 let image=document.querySelector(".container .img2").setAttribute("src", "images/dice1.png");
}
//for 2
else if(randomNumber2===2){
    let image=document.querySelector(".container .img2").setAttribute("src", "images/dice2.png");
   }
//for 3
else if(randomNumber2===3){
    let image=document.querySelector(".container .img2").setAttribute("src", "images/dice3.png");
   }
//for 4
else if(randomNumber2===4){
    let image=document.querySelector(".container .img2").setAttribute("src", "images/dice4.png");
   }
//for 5
else if(randomNumber2===5){
    let image=document.querySelector(".container .img2").setAttribute("src", "images/dice5.png");
   }
//for 6
else{
    let image=document.querySelector(".container .img2").setAttribute("src", "images/dice6.png");
}

//showing which player wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 won";
}
else{
    document.querySelector("h1").textContent="Match is Draw";
}