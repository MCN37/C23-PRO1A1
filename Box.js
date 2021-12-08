//Nombre del plano
class Box {


  // Constructor: funcion para crear el objeto,se invocara cada vez que se cree una caja
  //(x,y,w,h) le decimos a la pc donde dibujar el objeto y que tendra dimensiones
    constructor(x, y, width, height) {

      // agregar 'opciones' de parámetro, que afinarán el motor físico para el objeto.

          var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }  

         // instrucción para crear un cuerpo
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        //Agregar este objeto al mundo
        World.add(world, this.body);
    }


 //mostrar los objetos
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     rectMode(CENTER);
     
     fill(255);
     rect(0, 0, this.width, this.height);
     pop();     
      }
    }
