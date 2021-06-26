class Box{
    constructor(x,y){
        var option={
            restitution:0.8,
            friction: 0.2,
            density: 0.5
        }
        this.body=Bodies.rectangle(x,y,80,80,option)
        this.width=80
        this.height=80
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        strokeWeight(3)
        stroke("black")
        fill("red")
        rect(0,0,this.width,this.height)
        pop()
    }
}