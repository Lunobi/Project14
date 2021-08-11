var  bow , arrow,  scene;
var bowimg, arrowimg, greenballoonimg, redballoonimg, pinkballoonimg, blueballoonimg, backgroundimg;
 
function preload(){
    bowimg = loadImage("bow0.png");
    arrowimg = loadImage("arrow0.png");
    backgroundimg = loadImage("background0.png");
    greenballoonimg = loadImage("green_balloon0.png")
    redballoonimg = loadImage("red_balloon0.png");
    pinkballoonimg = loadImage("pink_balloon0.png");
    blueballoonimg = loadImage("blue_balloon0.png");
}

function setup(){
    createCanvas(400, 400);

    scene=createSprite(0, 0, 400, 400);
    scene.addImage(backgroundimg);
    scene.scale=2.5;

    bow=createSprite(380,220,20,50);
    bow.addImage(bowimg);
    bow.scale=1;

    score=0;
    redB= new Group();
    greenB= new Group();
    blueB= new Group();
    pinkB= new Group();
    arrowGroup= new Group();
}

function draw(){
    background(0)

    scene.velocityX=-3;
    if (scene.x < 0){
        scene.x = scene.width/2;
      }

    bow.y = World.mouseY;
    if (keyDown("space")){
        createArrow();
    }

    var select_balloon = Math.round(random(1, 4));

    if (World.frameCount % 100 == 0) {
        if (select_balloon == 1) {
          redBalloon();
        } else if (select_balloon == 2) {
          greenBalloon();
        } else if (select_balloon == 3) {
          blueBalloon();
        } else {
          pinkBalloon();
        }
    }

    if (arrowGroup.isTouching(redB)) {
        redB.destroyEach();
        arrowGroup.destroyEach();
          score=score+1;
    }
    
    if (arrowGroup.isTouching(greenB)) {
        greenB.destroyEach();
        arrowGroup.destroyEach();
        score=score+3;
    }

    if (arrowGroup.isTouching(blueB)) {
        blueB.destroyEach();
        arrowGroup.destroyEach();
        score=score+2;
    }

    if (arrowGroup.isTouching(pinkB)) {
        pinkB.destroyEach();
        arrowGroup.destroyEach();
        score=score+1;
    }


    drawSprites();
    text("Score: "+ score, 300,50);
}

function createArrow(){
    var arrow= createSprite(100, 100, 60, 10);
    arrow.addImage(arrowimg);
    arrow.x=360;
    arrow.y=bow.y;
    arrow.velocityX=-4;
    arrow.lifetime=100;
    arrow.scale=0.3;
    arrowGroup.add(arrow);
}

function blueBalloon(){
    var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
    blue.addImage(blueballoonimg);
    blue.velocityX=3;
    blue.lifetime=150;
    blue.scale=0.1;
    blueB.add(blue);
}

function redBalloon(){
    var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
    red.addImage(redballoonimg);
    red.velocityX=3;
    red.lifetime=150;
    red.scale=0.1;
    redB.add(red);
}

function greenBalloon(){
    var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
    green.addImage(greenballoonimg);
    green.velocityX=3;
    green.lifetime=150;
    green.scale=0.1;
    greenB.add(green);
}

function pinkBalloon(){
    var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
    pink.addImage(pinkballoonimg);
    pink.lifetime=150;
    pink.scale=1;
    pink.velocityX=3;
    pinkB.add(pink);
}
