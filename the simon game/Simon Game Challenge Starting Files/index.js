let buttonColours= ["red", "blue", "green", "yellow"];
let gamePattern=[];
let userClickedPattern=[];

let count=0;
let level=0;

$(document).keypress(function(){
  if(count==0){
    $("h1").text("Level " + level);
  nextSequence();
  count++;
  }
});

$(".btn").click(function(){

  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  console.log(gamePattern);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  // if(count>0){
  //   nextSequence();
  // }
  checkAnswer(userClickedPattern.length-1);
  debugger;
})


function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      
    console.log("Logic Working");

    if(userClickedPattern.length===gamePattern.length){
      
      setTimeout(nextSequence,1000); //high order function

    }

  }
  else{
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    animatePressEnd();
    $("h1").text("Game Over, Press Any Key to Restart");
    
    gamePattern=[];
    level=0;
    count=0;
    
  }
}


function nextSequence(){
  userClickedPattern = [];

if(count>0){
level++
  $("h1").text("Level "+level);
}

    randomNumber=Math.floor((Math.random()*4)); //random number between 0 to 3
    
    let randomChosenColour=buttonColours[randomNumber];

    //pushing random number in game pattern
    gamePattern.push(randomChosenColour);

//flashingcolors
    $("#"+randomChosenColour).fadeOut(200).fadeIn(200).fadeOut(300).fadeIn(300);

    //playing audio
    playSound(randomChosenColour);
}

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("."+currentColour).addClass("pressed")
   
setTimeout(remover,100);

  function remover(){
    $("."+currentColour).removeClass("pressed")
  }
}

function animatePressEnd(){   //for game over
  $("body").addClass("game-over");
   
setTimeout(remover,200);

  function remover(){
    $("body").removeClass("game-over");
  }
}

