class Person {
  constructor(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const newperson = new Person("John", 30, true);
console.log(newperson);

newperson.greet();


console.log(typeof (newperson));