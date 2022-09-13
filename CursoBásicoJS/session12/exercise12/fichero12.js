function fibonacci(n) {
  let lista = [];
  for (let i = 0; i < n + 1; i++) {
    if (i <= 1) {
      lista.push(i);
    } else {
      lista.push(lista[i - 2] + lista[i - 1]);
    }
  }
  lista.shift();
  return lista;
}

console.log(fibonacci(6));
