class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x>220&&this.body.velocity.x>10){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    

    for(var index=0; index<this.trajectory.length;index++){
      image(this.smoke,this.trajectory[index][0], this.trajectory[index][1]);
    }


    super.display();
  }
}
