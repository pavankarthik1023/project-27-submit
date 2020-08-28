class Bob{
    constructor(x,y,r){
    var  options={
    isStatic:false,
    restitution:0,
    friction:0.3,
    density:0.5,
    
    }
    this.body=Bodies.circle(x,y,r,options)
    this.x=x;
    this.y=y;
    this.r=r;
    World.add(world,this.body);
    }
    display(){
       
       fill("red");
       ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,40,40);

       
       
    }

    }