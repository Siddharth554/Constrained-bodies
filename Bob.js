class Bob
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic:true
        }
        this.bodies=Bodies.circle(x,y,r/2,options);
        World.add(world,this.bodies);
        this.r=r;
        
        
    }
    display()
    {
        push();
        translate(this.bodies.position.x,this.bodies.position.y);
        strokeWeight(3);
        fill(255,0,255);
        rect(CENTER);
        circle(0,0,this.r);
        pop();
    }

}
