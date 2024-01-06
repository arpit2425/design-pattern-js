//constructor func tion
function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}
CreateUser.prototype.getName = function () {
  return this.name;
};
const user1 = new CreateUser('arpit', 25);
const user2 = new CreateUser('oops', 25);
console.log(user2);
console.log(user1.getName());
