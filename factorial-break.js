
//..............APLICADO BREAK EN UNA FUNCION....................

function calculandoFactorialDe(n) {
let numero = 1
let acumulador = 1
while (true) {
    acumulador = acumulador*numero
    numero++
    if(numero === n)break
}
return `El factorial de ${numero} es: ${acumulador}`;
}
calculandoFactorialDe(10)

//.....................APLICANDO SOLO BREAK..............................

let numero = 1
let acumulador = 1
while (true) {
    acumulador = acumulador*numero
    numero++
    if(numero === 10)break
}
console.log(`El factorial de ${numero} es: ${acumulador}`);
console.log(acumulador);