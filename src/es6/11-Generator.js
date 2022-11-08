/*Es una funcion que mantiene su estado y retoma desde la posicion en la que se encontrabado
un ejemplo de esto son los "for on"*/



function* iterador(array) {
    for( let value of array ) {
        yield value;
    }    
}

const listaName = ["Yilver","Eva","Oscar","Pepito"]
const objeto = iterador(listaName);
console.log(objeto.next());
console.log(objeto.next());
console.log(objeto.next());











