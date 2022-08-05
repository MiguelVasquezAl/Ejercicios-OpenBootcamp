const compra = ["Arroz","Aceite","Azucar","Aniz","Aceituna"]
// const compraMod = [...compra,"Aceite de Girasol"]
// console.log(compraMod);

//--- Agregando "Aceite de Girasol"
compra.push("Aceite de Girasol")
console.log(compra);

//--- Eliminando "Aceite de Girasol"
compra.pop()
console.log(compra);


//..lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const listaPeliculas = [
    {titulo: "El naufrago",director: "El chavo", fecha: new Date(2015, 05, 11)},
    {titulo: "Nucleo",director: "Don ramon", fecha: new Date(2005, 03, 13)},
    {titulo: "Terremoto",director: "La chilindrina", fecha: new Date(2010, 06, 22)},
]

//nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const nuevalista = listaPeliculas.filter((a)=>a.fecha >new Date(2010, 0, 1))
console.log(nuevalista);

//nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listadirectores = listaPeliculas.map((a)=>a.director)
console.log(listadirectores);

//nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listatitulo = listaPeliculas.map((a)=>a.titulo)
console.log(listatitulo);

//nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaconcate = listadirectores.concat(listatitulo)
console.log(listaconcate);

//nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listafinal = [...listadirectores,...listatitulo]
console.log(listafinal);

