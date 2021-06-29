var gameState = "start";

var WaterFighter_Img, SpiderMan_Img, SirenTruck_Img;
var WaterFighter, SpiderMan, SirenTruck;
var Road_Img, ground, backgroundImg;

function preload(){

  WaterFighter_Img = loadImage("../images/WaterFighter.jpg");
  SpiderMan_Img = loadImage("../images/SpiderMan.png");
  SirenTruck_Img = loadImage("../images/SirenTruck.gif");
  Road_Img = loadImage("../images/RoadImg(3).png");
}
  




function setup() {
  createCanvas(windowWidth, windowHeight);

  WaterFighter = createSprite(480, 220, 20, 50);
  WaterFighter.addImage(WaterFighter_Img); 
  WaterFighter.scale = 0.3;
  WaterFighter.visible = false;

  //SpiderMan = createSprite(830, 100, 20, 50);
  //SpiderMan.addImage(SpiderMan_Img); 
  //SpiderMan.scale = 0.5;
  //SpiderMan.visible = false;

  SirenTruck = createSprite(200, 650, 20, 50);
  SirenTruck.addImage(SirenTruck_Img); 
  SirenTruck.scale = 0.7;

  //ground = createSprite(766, 359);
  //ground.addImage("ground", Road_Img);
  //ground.x = ground.width/2;
  //ground.scale = 1.5;

}

function draw() {
  background(backgroundImg);  

  if (keyDown("space") && gameState === "start"){

    gameState = "rescue";
    SirenTruck.x = 250;
  }
  
   if (gameState === "rescue"){
    //sirenSound.play();
    if (keyDown("D")) {
      SirenTruck.x = SirenTruck.x +10;
      
     }  
     
    if (keyDown("A")) {
      SirenTruck.x = SirenTruck.x -10;
      
    }

     if (SirenTruck.x > 1400)
     {       
      SirenTruck.x = SirenTruck.width/3;
      getBackgroundImg(true);   
      //change the gamestate to save to save the people
      gameState = "save";   
      WaterFighter.visible = true; 
     
       
     }   

    
  }

  drawSprites();

  if (gameState === "start"){


    // game playing instructions
    fill("#006eff");
    textSize(45);
    text("RESCUE PEOPLE",40,60);
    stroke(0);
    textSize(30);
    fill("red");
    text("INSTRUCTIONS:",40,160);
    fill(0);
    textSize(24);
    text("Press 'SPACEBAR' to start the game",40,200);
    stroke(0);
    fill(0);   
    text("To move the FireTruck press 'D' key ", 40, 240);
    stroke(0);
    textSize(24);
    fill(0);
    text("Move the FireFighter person up and down using the mouse.",40,280);
     
  }
}

function getBackgroundImg(image1){

  //load the image in backgroundImg variable here
  if (is_image){
  
    backgroundImg = loadImage("Images/BuildingOnFire.jpg");
   
  }
  else{
    backgroundImg = loadImage("Images/RoadImg.jpg");
  }
  
}