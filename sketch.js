var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edge
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   block1=createSprite(50,590,180,70);
   block1.shapeColor="red";
   block2=createSprite(295,590,180,70);
   block2.shapeColor="green";
   block3=createSprite(515,590,180,70);
   block3.shapeColor="blue";
   block4=createSprite(720,590,180,70);
   block4.shapeColor="yellow";
    
   ball=createSprite(random(20,750),100,40,40);
   ball.shapeColor="white";
   ball.velocityX=5
   ball.velocityY=5

   //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  
    edge=createEdgeSprites();
 if(ball.isTouching(block1)&&ball.bounceOff(block1)){
     ball.shapeColor="red"
     music.play();
    }
if(ball.isTouching(block2)&&ball.bounceOff(block2)){
        ball.shapeColor="green"
        music.play();
       }
 if(ball.isTouching(block3)&&ball.bounceOff(block3)){
        ball.shapeColor="blue"
        music.play();
       }
if(ball.isTouching(block4)&&ball.bounceOff(block14)){
        ball.shapeColor="yellow"
        music.play();
       }
       ball.bounceOff(edge);
 drawSprites();
    //add condition to check if box touching surface and make it box
}

