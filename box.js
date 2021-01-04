class box{

    constructor(x,y){

     var options={  
    friction:0.5,
    restitution:0.8,
    density:1.0

     };
     this.Body=Bodies.rectangle(400,650,1200,20,options)
     World.add(World,this.body)
    };
display(){
    var pos=this.Body.position
    rectMode(CENTER)
    rect(pos.x,pos.y,1200,20);
    
};

};