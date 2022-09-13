console.log(localStorage.getItem("name"));

localStorage.setItem("name", { name: "John" });
console.log(localStorage.getItem("name"));

console.log(JSON.parse(localStorage.getItem("name")));

localStorage.removeItem("name");
localStorage.removeItem("age");
