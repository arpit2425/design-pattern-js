class CreateUser {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  getName() {
    return this.name;
  }
  getAge(){
    return this.#age;
  }
  #getPassword(){
    return 'abc'
  }
}
const user1 = new CreateUser('arpit', 25);
console.log(user1.getName())
console.log(user1.getAge())
//error
// console.log(user1.#getPassword())
