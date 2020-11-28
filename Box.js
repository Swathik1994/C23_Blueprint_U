class Box{

    //properties
    constructor(x,y,width,height){

    var options={
        restitution: 1.4
    }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);


    }

    //functions
    display(){

    var pos = this.body.position;
    fill ("blue");
    rect (pos.x, pos.y,this.width,this.height);

    }
}