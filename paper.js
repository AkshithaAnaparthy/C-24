class Paper {
    constructor(x, y,radius) {
      var options = {
          isStatic: true,
          'restitution':0.2,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;

      push();
      translate(pos.x,pos.y);
      rotate(angle)
      fill("purple");
      ellipseMode(CENTER)
      pop();
    }
  };