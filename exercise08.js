//Una función sin parámetros que devuelva siempre "true"
function n() {
    return true
}
console.log(n());


//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

// const mipromesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Hola soy una promesa"),5000
//     })
// })
// mipromesa

async function promesa(){
    return setTimeout(()=>console.log("Hola soy una promesa"),5000)
}

// Una función generadora de índices pares automáticos
function* pares() {
    let i = 0
    while (true) {
        i++
        if(i%2===0) yield i
    }
}
const exit = pares ()
console.log(exit.next());
console.log(exit.next());
console.log(exit.next());
console.log(exit.next());
console.log(exit.next());
console.log(exit.next());
console.log(exit.next());
console.log(exit.next());
console.log(exit.next());

