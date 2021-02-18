const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground1;

function preload(){
  rockImg=loadImage("polygon.png");
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  bottomGround=new Ground(400,390,800,20);
  ground1=new Ground(300,350,250,10);
  ground2=new Ground(600,280,200,10);

  
  box1=new Box(205,320,"green");
  box2=new Box(235,320,"green");
  box3=new Box(265,320,"green");
  box4=new Box(295,320,"green");
  box5=new Box(325,320,"green");
  box6=new Box(355,320,"green");
  box7=new Box(385,320,"green");

  
  box8=new Box(235,270,"pink");
  box9=new Box(265,270,"pink");
  box10=new Box(295,270,"pink");
  box11=new Box(325,270,"pink");
  box12=new Box(355,270,"pink");

 
  box13=new Box(265,220,"red");
  box14=new Box(295,220,"red");
  box15=new Box(325,220,"red");

 
  box16=new Box(295,170,"purple");
  
  box17=new Box(535,250,"blue");
  box18=new Box(565,250,"blue");
  box19=new Box(595,250,"blue");
  box20=new Box(625,250,"blue");
  box21=new Box(655,250,"blue");

  
  box22=new Box(565,200,"orange");
  box23=new Box(595,200,"orange");
  box24=new Box(625,200,"orange");
  box25=new Box(595,150,"white");

  rock=Bodies.circle(100,300,20);
  World.add(world,rock);

  slingshot1=new Slingshot(this.rock,{x:80,y:250});
}

function draw() {
  background(56,44,44);  
  drawSprites();

  bottomGround.display();
  
  textSize(20);
  fill("orange")
  text("Press space to get second chance to play!!",200,50)
  Engine.update(engine);

  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();

  imageMode(CENTER);
  image(rockImg,rock.position.x,rock.position.y,40,40);

  slingshot1.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.rock,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot1.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingshot1.attach(this.rock);
  }
}