const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    parrafo.classList.add("dragging");
    const elemento_fantasma = document.createElement("div");
    event.dataTransfer.dragImage(elemento_fantasma, 0, 0);
  });
  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (e) => {
    e.preventDefault();
    const parrafo = document.querySelector(".dragging");
    seccion.appendChild(parrafo);
  });
});
