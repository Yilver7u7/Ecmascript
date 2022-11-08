//Array destructuring

let fruits = ["Apple","Banana","Mango"]
//Creamos dos variables que traen la posicion de nuestro Array :0
let [a,,b] = fruits;
console.log(a,b)

//Object destructuring
let user = {
    username: "Yilver", 
    password: "password"
}
let {username,password} = user;
console.log(username)


/*let yilver = {
    nameY: "Yilver", 
    password: "123"
}
let eva = {
    username: "Eva Yuliana", 
    password: "eva123"
}

let listUser = [
    yilver,eva
]

let [,c] = listUser
console.log(c)
let {nameY} = listUser[0]
console.log(nameY)*/


//Spread Operador (Insertar Propiedades a nuestros Objetos)

let y = {name: "Yilver", age:23};
let contry = "Colombia";

let data = {...y, contry: contry}
console.log(data)
console.log(y)


//Rest 
/*
function suma(num,...values) {
    console.log(values)
    console.log(num+values[2])
    return num+values[2]
}

suma(2,2,5,6,3,4)*/

/*function solucion(json1,json2) {
    json1 = json1 || {
        name: "Mr. Michi",
        food: "Pescado"
      }
      json2 = json2 ||{
        age: 12,
        color: "Blanco"
      } 
    return {...json1, ...json2} 
}
solucion()*/


