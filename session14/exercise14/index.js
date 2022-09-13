const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
  alert("Click");
});

$(() => {
  $("#magic").click(() => {
    alert("Hola, estoy utilizando jQuery");
  });
});
