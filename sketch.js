const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world,ground;

function setup()
{
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  bob=new Bob(800,650,50)
  // bob1=new Bob(700,650,50)
  // bob2=new Bob(900,650,50)
  // bob3=new Bob(600,650,50)
  // bob4=new Bob(1000,650,50)

  constrainedLog=new Holder(230,180,200,50);

  var options=
  {
    bodyA: bob.body,
    // bodyA: bob1.body,
    // bodyA: bob2.body,
    // bodyA: bob3.body,
    // bodyA: bob4.body,
    bodyB:constrainedLog.body,
    stiffness:0.04,
    length:20
  }
  var chain=Constraint.create(options);
  World.add(world,chain);

}

function draw()
{
  background("black");
  Engine.update(engine);
  
  bob.display();
  // bob1.display();
  // bob2.display();
  // bob3.display();
  // bob4.display();

  constrainedLog.display();
  
  
  
  // line(bob4.body.position.x,bob4.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);
  // line(bob3.body.position.x,bob3.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);
  // line(bob2.body.position.x,bob2.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);
  // line(bob1.body.position.x,bob1.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);
   line(bob.body.position.x,bob.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);
}

