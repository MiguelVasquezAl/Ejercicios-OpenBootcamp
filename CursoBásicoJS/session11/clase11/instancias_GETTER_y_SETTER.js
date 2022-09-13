class Person {
  //Private #  = solo se puede acceder desde la clase
  #obtenedad;
  #name;
  #age;
  //protectec _ = solo se puede acceder desde la clase y las clases que hereden
  _isDevelper = true;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.#name} and I am ${this.#age} years old.`
    );
  }
  //Funcion getter = Nos permite acceder (de forma controlada) a una propiedad privada
  obtenename() {
    return this.#name;
  }
  // #obtenedad() {
  //   return this.age;
  // }
  //Funcion getter = Nos permite acceder (de forma controlada) a una propiedad privada
  getEdad() {
    return this.#age;
  }
  //Funcion setter = Nos permite modificar (de forma controlada) una propiedad privada
  setEdad(newAge) {
    this.#age = newAge;
  }
}

const persona = new Person("Miguel", 29);
console.log(persona);
console.log(persona.obtenename());

//console.log(persona.#name);
// persona.greet();

persona.setEdad(15);
console.log(persona.getEdad());
