class CreateUser {
  #age;
  static type='human';
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
  get fullname(){
    return this.name
  }
  set fullname(name){
    this.name=name
  }
}
const user1 = new CreateUser('arpit', 25);
console.log(user1.getName())
console.log(user1.getAge())
//error
// console.log(user1.#getPassword())
console.log(CreateUser.type)
console.log(user1.fullname)
