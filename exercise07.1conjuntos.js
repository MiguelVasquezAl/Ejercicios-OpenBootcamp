
const listfamily = ["Miguel","Luis","Victoria","Arturo"]

//nuevo Set con los nombres de tu familia
const family = new Set(listfamily)
console.log(family);

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
console.log(family.add("Miguel"));

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
console.log(family.add("JavaScript"));
