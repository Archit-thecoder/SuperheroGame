
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var b1=[], b2=[], b3=[], b0 =[];
var backgroudImg;

function preload(){
	backgroundImg= loadImage("GamingBackground.png")
}


function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,580,1600,40)

	for (var i=540; i>100; i = i-80){
		b0.push(new Box(680,i))
	}

	 for (var i=540; i>200; i = i-80){
		 b1.push(new Box(800,i))
	 }
	 
	 for (var i=540; i>100; i = i-80){
		b2.push(new Box(920,i))
	}

	for (var i=540; i>200; i = i-80){
		b3.push(new Box(1020,i))
	}
	
	superhero= new Superhero(200,300)
	rope= new Rope(superhero.body,{x:200,y:150})
	monster = new Monster(1250,150,40,60)
	rope1 = new Rope(monster.body,{x:1250,y:150})
	Engine.run(engine);
  
}


function draw() {

  background(backgroundImg);

  ground.display();

    for(var j=0; j<b0.length;j=j+1){
		b0[j].display();
	}

	 for(var j=0; j<b1.length;j=j+1){
	  	b1[j].display()
		}
  	for(var j=0; j<b2.length;j=j+1){
		b2[j].display()
	} 
	 for(var j=0; j<b3.length;j=j+1){
		b3[j].display();
	}
	
	superhero.display();
	rope.display();
	monster.display();
	rope1.display();
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
}
