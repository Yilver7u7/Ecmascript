/*//Declaracion
class user {};
//Instancia de una clases 
//const name = new class();
const Yilver = new User();*/

class user{
    //Constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    saludar(){
        return "Hola ¿Como estas?";
    }
    speak(){
        console.log(`${this.saludar()}`)
    }
    info(){
        console.log(`Nombre: ${this.name}\nEdad: ${this.age}`)
    }
};

const salu = new user("yilver","15");
//console.log(salu.saludar());

//Constructor
/*class user{
    //Constructor
    constructor(name,age){
        console.log(`Su nombre es: ${name}\nTu edad es: ${age}`);
    }
};*/
const yilver = new user("Yilver",23);
yilver.info()


//This (Este)
/*class user{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}*/










