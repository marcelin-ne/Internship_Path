interface PersonaInterface {
    name: string,
    code: string | number;
    charge: number,
    description?:string, // ? Hace que el campo sea opcional
    sayhello: () => string;
}
//? Contrato Esqueletico  Solo son un modelo lo que va a tener
//! Se pueden implementar 
class PersonClass{
    sayHello(){
        console.log("Grr");
        fetch("...");
    }
}
//? Clase contruye el objeto y puede tener dentro implementaciones de codigo
//* Ambos tienen la estruccutra de la Persona
//! Se pueden extender
//! Acceso a la palabra new 
// const personaOne: PersonaInterface = {};

const personTwo: PersonClass= new PersonClass();


interface PetInterface {
    sayHello: ()=> string;
}

class PetClass {
    sayHello(){
        return "hola";
    }
}
//? Obliga a cumplir con el contrato y se debe hacer manual
class Cat implements PetInterface{
    // Lo que se esta implementando debe incluir lo que contiene la interface
    sayHello(){
        return "hola desde Cat";
    }
}
//? Trae todo lo que ya tiene , permite reutilizar codigo
class Cow extends PetClass{}