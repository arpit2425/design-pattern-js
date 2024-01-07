/*
constructor(size, cheese = true, pepperoni = true, tomato = false, lettuce = true) {
    // ... 
}

*/

class Student {
  constructor(student) {
    this.name = student.name;
    this.age = student.age;
    this.standard = student.standard;
    this.house = student.house;
    this.roll_no = student.roll_no;
    this.school = student.school;
  }
}
class StudentBuilder {
  setSchool(school) {
    this.school = school;
    return this;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  setAge(age) {
    this.age = age;
    return this;
  }
  setStandard(standard) {
    this.standard = standard;
    return this;
  }
  setRollNo(roll_no) {
    this.roll_no = roll_no;
    return this;
  }
  setHouse(house) {
    this.house = house;
    return this;
  }
  build() {
    return new Student(this);
  }
}
const student1 = new StudentBuilder().setAge(25).setName('Arpit').setSchool('upkssv').build();
console.log(student1);



/*
Javascript specific tip : When you find that the number of arguments to a function or method are too many (normally any more than 2 arguments is considered too much), use a single object argument instead of multiple arguments.


const std1=new Student({
    name:'arpit',
    age:25,
    school:'upkssv
})

instead of : 
const std1=new Student('arpit',25,'upkssv')

*/