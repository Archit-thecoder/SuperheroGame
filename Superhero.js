class Superhero{
    constructor(x,y){
        var option={
            restitution:0.05,
            friction:0.3
        }
        this.body=Bodies.circle(x,y,40,option)
        this.radius=40
        World.add(world,this.body)
        this.image = loadImage("superhero1.png")
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        strokeWeight(3)
        stroke("orange")
        fill("white")
        image(this.image,0,0,500,250)
        pop();
    }
}