console.time()
function square(side) {
    console.log(side*side)
    console.timeEnd()
}
square(5)

//Primera forma de usar un Arrow function
console.time()
const square1 = (side) =>{
    console.log(side*side)
    console.timeEnd()
}

square1(5)
//Segunda forma de usar un Arrow function
console.time()
const square2 = side => console.log(side*side)
square2(5)
console.timeEnd()
