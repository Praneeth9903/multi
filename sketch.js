var gameState=0;
var playerCount=0;
var database;
var game,form,player;
var y,c1;
function preload() {
 c=loadImage("C.png");
}


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
game.getState();
 game.start();


 y = createSprite(10,10,10020,200);
 y.shapeColor=("aqua");

 c1=createSprite(350,340);
c1.addImage(c);
 
}

function draw(){
 
  background("white");
  text.shapeColor=("black");
 

  if (playerCount==10){
    game.update(1);
  }
if (gameState==1){
  
game.play();
}


    
    drawSprites();
    
}

