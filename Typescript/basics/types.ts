let lage: string = "20";
let agemonth : number=20;
let isSenior: boolean = true;
let person: Object = [];

// let fruits : Object[] = [{},{name:"manzana"}];
//Con Any se puede cambiar a cualquier tipo, no es recomendable usarlo
let response: any ="hola"
response = 20;
response = true;
response=["hola",123]
// Si me deja ver los metodos asociados a tipo de dato
function saludar1 ():void {
    console.log("Hola")
}
//unkown mas controlado que el any
let response2 : unknown;
response2= true;
//No se puede completar con metodos por que no sabe el tipo
// Tipo de Dato vacio
let response3=null; // Variables vacias
// Undefined : no han sido inicialidas
let response4= undefined;
///--- Combinancion de tipos ------
//! Usar cuando los valores vienen de fuera
let response5 : null | number = 5; // Una respuesta puede venir vacia
response5?.toString();
// ? Es un operador null safety , verifica que eso sea diferente de nulo

//! Crear tu propio tipo de dato para evitar definir multiples veces
type ResponseService = number | undefined;

let responseProducst: ResponseService;
let responsePartner: ResponseService;

responsePartner?.toString().concat("");

//Type Assertion
let message : any = "" ;
//castear datos
(message as string).slice(1)
//Un tipo => otro tipo
let messageUppercase = (message as string).toUpperCase();
let message2Uppercase= <string> message;
message2Uppercase.toUpperCase();
// Para el manejo del DOM castear sirve bastante
const canvas = <HTMLCanvasElement> document.getElementById('canvas');
const canvas2= document.getElementById("canvas") as HTMLCanvasElement;