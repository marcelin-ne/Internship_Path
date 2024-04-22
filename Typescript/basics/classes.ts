// Se basan en prototipos por detras

//? Es un contrato que creamos para definir la estruccutura de los objetos que creamos
class Animal {
    name: 'Generic Animla'; // Accesibles desde fuera o desde otra clase
    private age = 10; // No da acceso a esa propiedad fuera de este scope ?Accesible a la clase
    protected identity="lll"; //Accesible a la clase, no desde afuera pero si desde la clase que extiende a la original
    sayHi(){
        console.log('Grr', this.age);
    }
}

const myAnimal :Animal = new Animal();
myAnimal.sayHi();

//* Herencia : Extender una clase a partir de otra

class Dog extends Animal {
    type: "Pastor Aleman";

    //? Metodo Contructor 
    // Es la funcion que representa el animal - construye el objeto
    //Primera funcion que se ejecuta al crear el objeto
    //Inicializar los campos que tengo de herencia
    constructor (){
        super(); // Inlcuir todo lo que viene de la clase padre
    }

    sayHi(){
        // this.identity
    }
}

const myDog= new Dog();


