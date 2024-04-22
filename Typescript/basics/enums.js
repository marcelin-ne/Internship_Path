//* Es un tipo de dato que permite almacenar una lista de valores estaticos
var Users;
(function (Users) {
    Users["NormalUser"] = "normal";
    Users[Users["PayedUser"] = 7] = "PayedUser";
    Users["AdminUser"] = "admin";
    Users[Users["MegaUser"] = 11] = "MegaUser";
})(Users || (Users = {}));
// Almacenas valores con un alias
var myUser = Users.AdminUser;
console.log(myUser);
