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
let p1=new Person('Arpit',25);
let p2=new Person('Design',25);
p1.greet();
p2.greet();
p1.sayBye();
console.log(p1.greet()===p2.greet()) //true

