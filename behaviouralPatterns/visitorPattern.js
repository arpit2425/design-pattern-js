//Visitor pattern let's you add further operations to objects without having to modify them.
/* 
The Visitor Pattern is a behavioral design pattern that defines a way to traverse elements of a complex object structure without introducing dependencies on its concrete classes. It allows you to define new operations on the elements without modifying their classes.

*/
class Element {
  accept(visitor) {
    throw new Error('Accept method not implemented');
  }
}
class ConcreateElementA extends Element {
  operationA() {
    console.log('performing operation for A');
  }
  accept(visitor) {
    visitor.visitConcreteElementA(this);
  }
}
class ConcreateElementB extends Element {
  operationB() {
    console.log('performing operation for B');
  }
  accept(visitor) {
    visitor.visitConcreteElementB(this);
  }
}
class Visitor {
  visitConcreteElementA(element) {
    element.operationA();
  }
  visitConcreteElementB(element) {
    element.operationB();
  }
}
const visitor = new Visitor();
const conA = new ConcreateElementA();
const conB = new ConcreateElementB();
conA.accept(visitor);
conB.accept(visitor);

// now defining new operations
class VisitorType2 {
  visitConcreteElementA(element) {
    console.log('this is a different operation for element A');
  }
  visitConcreteElementB(element) {
    console.log('this is a different operation for element B');
  }
}

const visT2 = new VisitorType2();
conA.accept(visT2);
conB.accept(visT2);
