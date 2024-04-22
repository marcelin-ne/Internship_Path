var age = "20";
var agemonth = 20;
var isSenior = true;
var person = [];
var fruits = [{}, { name: "manzana" }];
//Con Any se puede cambiar a cualquier tipo, no es recomendable usarlo
var response = "hola";
response = 20;
response = true;
response = ["hola", 123];
// Si me deja ver los metodos asociados a tipo de dato
function saludar() {
    console.log("Hola");
}
//unkown mas controlado que el any
var response2;
response2 = true;
//No se puede completar con metodos por que no sabe el tipo
// Tipo de Dato vacio
var response3 = null; // Variables vacias
// Undefined : no han sido inicialidas
var response4 = undefined;
///--- Combinancion de tipos ------
//! Usar cuando los valores vienen de fuera
var response5 = 5; // Una respuesta puede venir vacia
response5 === null || response5 === void 0 ? void 0 : response5.toString();
var responseProducst;
var responsePartner;
responsePartner === null || responsePartner === void 0 ? void 0 : responsePartner.toString().concat("");


