// Se basan en prototipos por detras 
//? Es un contrato que creamos para definir la estruccutura de los objetos que creamos
var Animal = /** @class */ (function () {
    function Animal() {
        this.age = 10; // No da acceso a esa propiedad fuera de este scope
    }
    Animal.prototype.sayHi = function () {
        console.log('Grr', this.age);
    };
    return Animal;
}());
var myAnimal = new Animal();
myAnimal.sayHi();
