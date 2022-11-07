import {getData} from "./modulo"
/*import sumar from "./modulo.js";
let a = 7
let b = 7
sumar(a,b)*/

export function solution() {
  // Tu código aquí 👈
  return getData().then(list => list);
}

solution()

