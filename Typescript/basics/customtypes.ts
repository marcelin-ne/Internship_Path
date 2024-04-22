type Person = {
    name: string;
    code: string | number;
    description?:string;
}
//Son similares a las interaces, las diferencias son pocas
const newPersona : Person= {
    code : "m",
    name: "mm",
}

type ServiceResponse =  string|null| number|undefined;
let responseService : ServiceResponse;

type UserCharges = "admin" | "normal"|  "superUser";
const myUserType : UserCharges = 'normal'; // Existe  validacion y autocompletado


