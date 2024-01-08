//The Template Method Pattern is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

class AbstractClass {
  templateBuilder() {
    this.stepOne();
    this.stepTwo();
    this.stepThree();
  }
  stepOne() {
    console.log('executing step one');
  }
  stepTwo() {
    console.log('executing step two');
  }
  stepThree() {
    console.log('executing step three');
  }
}
class ConcreateClass extends AbstractClass {
  //@overide stepTwo
  stepTwo() {
    console.log('executing step two with different implementation');
  }
}
class AnotherConcreateClass extends AbstractClass {
  //@overide stepThree
  stepThree() {
    console.log('executing step three with different implementation');
  }
}
const imp1=new ConcreateClass();
imp1.templateBuilder();
const imp2=new AnotherConcreateClass();
imp2.templateBuilder();