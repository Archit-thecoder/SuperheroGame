class Monster{
    constructor(x,y,w,h){
        var option = {
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x,y,w,h,option)
        this.width = w
        this.height =h
        this.visibility = 255
        World.add(world,this.body)
        this.image = loadImage("monster1.png")
    }
    display(){
        if(this.body.speed<5){ 
            push();
            translate(this.body.position.x,this.body.position.y)
            rotate(this.body.angle)
            imageMode(CENTER)
            image(this.image,0,0,250,250)
            pop();
    }
        else{
        push()
            World.remove(world,this.body)
            this.visibility= this.visibility-10
            tint(255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,250,250)
            pop()
    }
       
    }




}