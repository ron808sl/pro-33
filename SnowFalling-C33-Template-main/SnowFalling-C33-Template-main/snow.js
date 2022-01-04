class snow{
    constructor(){
       var options = {
            isStatic:false
            
        }
        this.body = Matter.Bodies.circle(20,30,20, options)
        this.image = loadImage("snow4.webp")
        World.add(world,this.body)
    }
    display (){
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image,20,30,20,20)
    }
   }