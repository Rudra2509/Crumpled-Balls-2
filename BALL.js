class Ball{
constructor(x,y){
    var options={
   'restitution':0.5,
   "isStatic":false,
   "friction":0.8,
   "density":1.2
    }

    this.body = Bodies.circle(x,y,65,options);
	World.add(world, this.body)
    this.image = loadImage("paper.png")
}
display(){
push();
//fill("blue");
//ellipseMode(RADIUS)
    //ellipse(this.body.position.x, this.body.position.y, 20)
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,120)
 pop();
}
}