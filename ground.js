class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.width=width
        this.height=height
    
        this.body = Bodies.rectangle(x,y,width,height,options)
    
        World.add(world,this.body)
    }
    
    display(){
        var paperPos = this.body.position

        var angle = this.body.angle

        push();
        translate(paperPos.x, paperPos.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke(255,0,255);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
    }