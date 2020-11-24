
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roofObject
var rope1, rope2, rope3, rope4, rope5;
var world; 

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	
	roofObject=new roof(width/2,height/4,width/7,20);

	bobDiameter=40;
	
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	
	bobObject1=new bob(startBobPositionX-bobDiameter*2, startBobPositionY, bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter, startBobPositionY, bobDiameter);
	bobObject3=new bob(startBobPositionX, startBobPositionY, bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter, startBobPositionY, bobDiameter);
	bobObject5=new bob(startBobPositionX+bobDiameter*2, startBobPositionY, bobDiameter);
	
	var render = Render.create({
	
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	 wireframes: false
	
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



