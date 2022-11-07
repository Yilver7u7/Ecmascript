const name = "Yilver"
const anotherFunction = ()=>{
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve("Hola, al parecer todo salio bien")
        }else{
            reject("whops, algo salio mal")}
    })
}

anotherFunction()
.then(response => console.log(response))
.catch(error => console.log(error))
