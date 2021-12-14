class Dustbin2 {
  constructor(x, y, width, height) {
    // var options = {
    //   isStatic: true,
    //   velocityX: 6,
    // };
    // this.body = Bodies.rectangle(x, y, width, height, options);
    // World2.add(world2, this.body);
    // this.width = width;
    //   this.height = height;
      this.image = loadImage("dustbingreen.png")
  }
  display() {
    push();
    image(this.image,410,385,180,155);
    pop();
  }
}
