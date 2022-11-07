//Modulo de suma, funciona al parecer igual que la palabra static en JAVA
/*const sumar = (a,b)=>{
    console.log("El resultado es:\n"+ (a+b))
}

export default sumar;*/

export async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 3000);
    });
}

export default getData;

