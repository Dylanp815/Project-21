// Rocket trying to reach planet

var PLAY = 1
var END = 0
var gameState = PLAY

var spaceImg


var rocketImg

var planetImg

var blackHoleImg

var asteriodImg

var explosionImg

var youWinImg

var youLoseImg


function preload(){
// Loading Background image
spaceImg = loadImage("Space.jpg")


// Loading Obstacle images
blackHoleImg = loadImage("Blackhole.png")
asteriodImg = loadImage("Asteriod.png")


// Loading Rocket and Planet images 
rocketImg = loadImage("Rocket.png")
planetImg = loadImage("Planet.png")

youWinImg = loadImage("You_win.png")

youLoseImg = loadImage("You_Lose.png")

}

function setup() {
// Creating canvas
createCanvas(400, 400);

// Adding the spaceImg to the background 
space = createSprite(400,400)
space.addImage(spaceImg)
space.velocityY = 2
 
// Adding the PlanetImg to the Planet sprite
planet = createSprite(200,30)
planet.addImage(planetImg)
planet.scale = 0.2

//Adding the blackHoleImg to the blackHole sprite
blackHole = createSprite(100,200,70,70)
blackHole.addImage(blackHoleImg)
blackHole.scale = 0.3
//blackHole.debug = true
blackHole.setCollider("circle", 0,0, 125)

// Adding the AsteriodImg to the Asteriod sprite
asteriod = createSprite(300,300,30,30)
asteriod.addImage(asteriodImg)
asteriod.scale = 0.1
asteriod.velocityX = -2
//asteriod.debug = true

// Adding the RocketImg to the Rocket sprite
rocket = createSprite(200,360)
rocket.addImage(rocketImg)
rocket.scale = 0.1
rocket.setCollider("circle", 0,0, 250)
//rocket.debug = true

youWin = createSprite(200,200, 50, 50)
youWin.addImage(youWinImg)

youLose = createSprite(200,200,50,50)
youLose.addImage(youLoseImg)
}


function draw() {
  background(0)   

if (gameState===PLAY){

    youWin.visible= false;
    youLose.visible=false;


if(space.y > 400){
    space.y = height/2

}

if(keyDown("LEFT_ARROW")){
    rocket.x = rocket.x-3
}

if(keyDown("RIGHT_ARROW")){
    rocket.x = rocket.x+3
}

if(keyDown("UP_ARROW")){
    rocket.y = rocket.y-2
}

if(rocket.isTouching(asteriod)){
gameState = END
youLose.visible = true;
}
if(rocket.isTouching(blackHole)){
    gameState = END
    youLose.visible = true
}
if(rocket.isTouching(planet)){
youWin.visible = true
gameState=END
}

}
else if (gameState === END) {
    space.velocityY = 0
 asteriod.velocityX = 0

}






 drawSprites()
}


