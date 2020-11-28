var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,line1,line2,line3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 60, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

line1=createSprite(width/2.5,height-80,20,80);
line1.shapeColor=color("green")

line2=createSprite(width/1.7,height-80,20,80);
line2.shapeColor=color("blue")

line3=createSprite(width/2,height-50,150,20);
line3.shapeColor=color("red")
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  packageSprite.collide(line1);
  packageSprite.collide(line2);
  packageSprite.collide(line3);
   drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
	//restitution=0.8;
 
  }
}



