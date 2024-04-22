//* Es un tipo de dato que permite almacenar una lista de valores estaticos

enum Users{
    NormalUser = 'normal',
    PayedUser = 7,
    AdminUser = 'admin',
    MegaUser = 11,
}
// Almacenas valores con un alias
// Permiten centralizar codigo
const myUser = Users.AdminUser;
console.log(myUser);