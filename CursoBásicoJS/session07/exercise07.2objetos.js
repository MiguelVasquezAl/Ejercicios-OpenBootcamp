
//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const objets = {name: "Luis Miguel",lastname: "Vasquez Alvarez",age: 29,height: 1.58,isDeveloper: true}

//Una variable que obtenga tu edad a partir del objeto anterior
const myage = objets.age
console.log(myage);

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datos_personales = [{...objets},{name: "Maria",lastname: "Gonzales",age: 23,height: 1.57,isDeveloper: true},{name: "Pamela",lastname: "Miranda",age: 28,height: 1.59,isDeveloper: false}]
console.log(datos_personales);

//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaordenada = datos_personales.sort((a,b)=>b.age-a.age)
console.log(listaordenada);
