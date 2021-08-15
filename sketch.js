
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

let ball;
var ground;

var rock;

function setup()
{
  createCanvas(400,400);
  
  rectMode(CENTER)
  engine=Engine.create();
  world=engine.world

  var ballOptins={
    restitution:0.95,
    friction:0.01
  };
  ball=Bodies.circle(100,200,20,ballOptins);
  World.add(world,ball);

  var groundOptions={
    isStatic:true,
  };
  ground=Bodies.rectangle(200,390,400,50,groundOptions);
  World.add(world,ground)

  var rockOptions={
    restitution:0.85
  };
  rock=Bodies.circle(350,200,20,rockOptions);
  World.add(world,rock);

}

function draw() 
{
  background(51);
  Engine.update(engine);
 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,50)

 ellipse(rock.position.x,rock.position.y,20);
}

