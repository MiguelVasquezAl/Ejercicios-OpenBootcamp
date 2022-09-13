
//..............APLICADO FOR EN UNA FUNCION....................
function calculandoFactorialDe(n) {
    let acumulador = 1
    for (let i = 1; i <= n; i++) {
        acumulador = acumulador * i
    }
    return `El factorial de ${n} es: ${acumulador}`  
}
calculandoFactorialDe(10)

//.....................APLICANDO SOLO FOR..............................

let numero = 10
let acumuladorz = 1
for (let i = 1; i <= numero; i++) {
    acumuladorz = acumuladorz * i
}
console.log(`El factorial de ${numero} es: ${acumuladorz}`);
console.log(acumuladorz);
