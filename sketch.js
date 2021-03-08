const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hunter,hunter_img;
var enemy,enemy_img;
var boss,boss_img;



function preload(){

	hunter = createSprite(400,400,1,1)
	enemy = createSprite(800,800,1,1)
	boss = createSprite(600,600,1,1)
}

function setup() {

	createCanvas(1200, 1200);

	hunter_img = loadImage("hunter.png");
	hunter.addImage(hunter_img);

	//enemy_img = loadAnimation("enemy.gif");
	//enemy.addAnimation(enemy_img);

	boss_img = loadImage("boss/Screenshot (14).png","boss/Screenshot (15).png","boss/Screenshot (16).png");
	boss.addImage(boss_img);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     hunter = new Hunter(400,400,1,1);
	 //enemy = new Enemy(800,800,1,1);
	 boss = new boss(600,600,1,1);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  hunter.scale = 1.2;
  hunter.display();

  //enemy.scale = 1.2;
  //enemy.display();

  boss.scale = 1.2;
  boss.display();

  drawSprites();

}



