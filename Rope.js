class Rope{
    constructor(body1,pointB){
        var option = {
            bodyA: body1,
            pointB: pointB,
            stiffness: 0.05,
            //length: 300
        }
        this.rope= Constraint.create(option)
        this.pointB =pointB;
        World.add(world,this.rope)
    }
    display(){
        var pointA= this.rope.bodyA.position
        var pointB = this.pointB
        strokeWeight(0)
        stroke("black")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}