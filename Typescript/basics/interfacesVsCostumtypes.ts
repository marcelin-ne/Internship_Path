//* Interfaces
//Se puede extender desde otras interfaces
// Extender una interfaz de un tipo si es posible
//? Se puede extender desde una interfaz
// interface Persone{
//     name: string;
//     age: number;
// }
//? Se puede extender desde un tipo
type Persone = {
        name: string;
        age: number;
    }


interface Employee extends Persone {
    charge: string;
} // El empleado debe incluir lo que tiene persona

const newEmployee : Employee={
    name:'',
    age:40,
    charge:"",
};

//* Union Types

type User={
    id: string;
}

type Admin = User & {token : string};
const myAdmin : Admin = {
    id:"",
    token:""
}
//? Extender un type de otro type
type Admin2 = User & Persone;


// Los types tienen mas especificidad para definir los valores
//Las interfaces se pueden acoplar entre si , sin necesidad de hacerlo manualmente.

interface Developer {
    name: string;
    stack: string[];
}


interface Developer{
    phone: string;
}

//? Asume que las dos interfaces son las mismas sin mezclar estruccturas

const me : Developer={
    name:"",
    stack:[],
    phone:'',
};