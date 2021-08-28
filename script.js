function ship(){
    this.floats=true;
    this.material="steel";
    this.imMadeOf=function(){
        console.log("Im made of "+this.material);
        }
}                                    
 
const myShip1=new ship(); // new object created   //creating from function
const myShip2=new ship(); //new circuit of my function another Obj

console.log(myShip1.floats);
console.log(myShip2.material);

myShip2.imMadeOf();     //this name = function  EQUALS function = name()



const planeTemplate = {
    name:"Bob",
    material:"aluminum",
}
                                                //creating from object
const myPlane1=Object.create(planeTemplate);  //creating object with copied interior
const myPlane2=Object.create(planeTemplate);   

console.log(myPlane2.name);  

myPlane2.name="Osas2";   //implementation values // changing copied from template values
console.log(myPlane2.name);
