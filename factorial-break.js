
//..............APLICADO BREAK EN UNA FUNCION....................

function calculandoFactorialDe(n) {
let i = 1
let acumulador = 1
while (true) {
    acumulador = acumulador*i
    i++
    if(i === n+1)break
}
return `El factorial de ${n} es: ${acumulador}`;
}
calculandoFactorialDe(10)

//.....................APLICANDO SOLO BREAK.............................

let numero =10
let i = 1
let acumulador = 1
while (true) {
    acumulador = acumulador*i
    i++
    if(i === numero+1)break
}
console.log(`El factorial de ${numero} es: ${acumulador}`);
console.log(acumulador);