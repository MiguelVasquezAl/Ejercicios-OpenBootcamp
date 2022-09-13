let alturaCm = 158;

let alturaMetro = 1.58;
let alturaMetrostr = `1.58`;
console.log(parseFloat(alturaMetro));
console.log(parseFloat(alturaMetrostr));

let pesoKl = 55.68;
let pesoKlstr = "55.68";
console.log(parseFloat(pesoKl));
console.log(parseFloat(pesoKlstr));

let alturaRedondArriba = Math.ceil(alturaMetro)
console.log(alturaRedondArriba);

let pesoRedondArriba = Math.floor(pesoKl)
console.log(pesoRedondArriba);

//No notamos ningun cambio al hacer la suma
let max_valor_JS = Number.MAX_VALUE
console.log(Number(max_valor_JS)+1);
console.log(max_valor_JS+1);
console.log(max_valor_JS);
