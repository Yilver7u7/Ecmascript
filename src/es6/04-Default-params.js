function newUser(name,age,password) {
    var name = name || "Yilver";
    var age = age || 15;
    var password = password || "yilver123";
    console.log(name, age, password);
}
newUser()
//newUser("Oscar",15,"pepe")

//Parametros por default 
function newAdmin(name = "Said",age = 25,password = "eva123") {
    console.log(name, age, password);
}
newAdmin()
newAdmin("Eva",20,"yuliana")