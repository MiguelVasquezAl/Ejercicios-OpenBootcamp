//En el entrypoint index.js, importa el módulo controller.js

import {sum,multiply} from "./modulos/controller.js"


const adicion = sum(2,5)
console.log(adicion);

const multiple = multiply(2,5)
console.log(multiple);


