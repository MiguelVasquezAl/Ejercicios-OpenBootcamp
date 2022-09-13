//herencia

class Persona {
  //protegiendo nombre y edad
  _nombre;
  _edad;
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this._nombre} y tengo ${this._edad} años`);
  }
}

class Desarrollador extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad);
    this.lenguaje = lenguaje;
  }
  //POLIMORFISMO  // OVERRIDING
  saludar() {
    super.saludar();
    console.log(`Y soy desarrollador/a de ${this.lenguaje}`);
  }
}

const nuevodev = new Desarrollador("Miguel", 29, "JavaScript");
console.log(nuevodev);

nuevodev.saludar();
