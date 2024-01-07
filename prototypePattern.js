let personMethods = {
  greet: function () {
    console.log(`Hello from ${this.name}`);
  },
  sayBye: function () {
    console.log(`Bye from ${this.name}`);
  },
};

function Person(name, age) {
  function initializePerson(name, age) {
    this.name = name;
    this.age = age;
  }
  initializePerson.prototype = personMethods;
  let personInstance = new initializePerson(name, age);
  return personInstance;
}
let p1 = new Person('Arpit', 25);
let p2 = new Person('Design', 25);
p1.greet();
p2.greet();
p1.sayBye();
console.log(p1.greet() === p2.greet()); //true

//class syntax

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}
class PersonPrototype {
  constructor(proto) {
    this.proto = proto;
  }
  clone() {
    return new Person2(this.proto.name, this.proto.age);
  }
}

const person1 = new Person2('Arpit', 25);
const prototype = new PersonPrototype(person1);
const person2=prototype.clone();
person2.setName('Java');
console.log(person1);
console.log(person2);
console.log(person2.getName===person1.getName);
