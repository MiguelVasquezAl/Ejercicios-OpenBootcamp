//import { eleva, suma,nombre} from "./modulos/matematicas.js"
//import { libro } from "./modulos/literatura.js";
import * as modulomadre from "./modulos/matematicas.js"
import geAutor, { libro } from "./modulos/literatura.js";

const sum = modulomadre.suma(4,12)
console.log(sum);

const poten = modulomadre.eleva(2,21)
console.log(poten);

console.log(modulomadre.nombre);

console.log(geAutor());
console.log(libro);