const boton = document.getElementById("btn");

console.log(boton);

boton.addEventListener("click", () => {
  //   console.log("banana");
  //   confirm("¿Estás seguro?") && console.log("banana");
  confirm("¿Estás seguro?") ? console.log("banana") : console.log("no banana");
});

const botonInfo = document.getElementById("more");
botonInfo.addEventListener("click", () => {
  const nombre = prompt("¿Cuál es tu nombre?");
  alert(`Hola ${nombre}`);
});

const list = [
  {
    name: "Juan",
    age: 20,
  },
  {
    name: "Pedro",
    age: 30,
  },
  {
    name: "Pablo",
    age: 40,
  },
];

console.table(list);
