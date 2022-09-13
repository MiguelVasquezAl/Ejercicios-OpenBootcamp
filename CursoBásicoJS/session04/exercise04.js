let nombre = "Luis Miguel";
let apellido = "Vasquez Alvarez";

let estudiante = `${nombre} ${apellido}. `
console.log(`${nombre} ${apellido}.`);
console.log(estudiante);

let estudianteMayus = estudiante.toLocaleUpperCase()
console.log(estudiante.toLocaleUpperCase());
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLocaleLowerCase()
console.log(estudiante.toLocaleLowerCase());
console.log(estudianteMinus);

console.log(estudiante.length);

console.log(nombre.charAt(0));

console.log(apellido.charAt(apellido.length-1));

console.log(estudiante.trim());

console.log(estudiante.includes(nombre));