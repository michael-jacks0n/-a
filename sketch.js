
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var chao
var toquinhodaesquerda
var toquinhodadireita
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	chao=new box(width/2,670,width,20)
	toquinhodaesquerda=new box(1100,600,20,120)
	toquinhodadireita=new box(1350,600,20,120)
	Engine.run(engine);
  var ballOptions={
	isStatic:false,
	restitution:0.3,
	friction:0,
	desity:1.2

  }
  ball=Bodies.circle(260,100,20, ballOptions)
World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
chao.display()
toquinhodadireita.display()
toquinhodaesquerda.display()
ellipse(ball.position.x,ball.position.y,40,40);

}
function keyPressed(){
	if (keyCode===32){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


