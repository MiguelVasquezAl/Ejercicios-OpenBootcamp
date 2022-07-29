
//..............APLICADO WHILE EN UNA FUNCION....................
function calculandoFactorialDe(n) {
    let acumulador = 1
    let i = 1
    while (i <= n) {
        acumulador*= i
        ++i;
    }
    return `El factorial de ${n} es: ${acumulador}`  
}
calculandoFactorialDe(10)

//.....................APLICANDO SOLO WHILE.............................

let numero = 10
let acumulador = 1
let i = 1
while (i <= numero) {
    acumulador*= i
    ++i;
}
console.log(acumulador);
console.log(`El factorial de ${numero} es: ${acumulador}`);
