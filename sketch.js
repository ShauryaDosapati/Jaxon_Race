var runner, runner_Run, runner_collided;
var path, invisiblePath, pathImage;

function preload() {
    runner_Run = loadAnimation("Runner-1.png","Runner-2.png");
    pathImage = loadImage("path.png")
}

function setup() {
    createCanvas(400,400);
    
    lInvisiblePath = createSprite(0,400,10,400)
    lInvisiblePath.visible = false
    rInvisiblePath = createSprite(800,400,10,400)
    rInvisiblePath.visible = false
}

function draw() {
    background("black");

    //create a path sprite
    path = createSprite(200,200);
    path.addImage("path",pathImage);
    //path.x = path.hieght /2;
    path.velocityY = 4;
    path.scale=1.2;
  
    //create a runner sprite
    runner = createSprite(mouseX,400,20,50);
    runner.addAnimation('runner_1',runner_Run);
    runner.scale = 0.15;

    //making the path infinite
    if (path.y > 400) {
        path.y = path.hieght / 2;
    }

    lInvisiblePath = createSprite(0,200,10,400)
    lInvisiblePath.visible = false
    rInvisiblePath = createSprite(400,200,10,400)
    rInvisiblePath.visible = false

    //colliding with the invisible path 
    runner.collide(lInvisiblePath);
    runner.collide(rInvisiblePath);    

    drawSprites(); 
  
}
