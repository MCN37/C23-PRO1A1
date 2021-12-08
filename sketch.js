


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

//crear objeto caja 1
var box1;


function setup(){

    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

  //crear objeto caja 1
    box1 = new Box(200,200,40,40);



    //crear piso


    
}


function draw(){
    background(0);

    Engine.update(engine);

    rectMode(CENTER);

  

    //mostrar objeto caja 1
    box1.display();

    
    //mostrar piso
    

    
}