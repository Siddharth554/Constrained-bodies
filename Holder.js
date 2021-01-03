class Holder
{
    constructor(x,y,w,h)
    {
        var options=
        {
            isStatic:true
        }
        this.bodies=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.bodies);
        this.w=w;
        this.h=h;
        
    }
    display()
    {
        push();
        translate(this.bodies.position.x,this.bodies.position.y);
        strokeWeight(3);
        fill("brown")
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }

}