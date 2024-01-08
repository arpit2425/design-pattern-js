class AfricanLion {
  roar() {
    console.log('African lion');
  }
}
class AsianLion {
  roar() {
    console.log('Asian lion');
  }
}
class Hunter {
  constructor(lion) {
    this.lion = lion;
  }
  hunt() {
    this.lion.roar();
  }
}
let africanLion = new AfricanLion();
let hunter1 = new Hunter(africanLion);
hunter1.hunt();

class WildDog {
  bark() {
    console.log('dog barking');
  }
}

//hunter does not have support for wild dog so we will create dog adaptor to support

class DogAdaptor {
  constructor(dog) {
    this.dog = dog;
  }
  roar() {
    this.dog.bark();
  }
}
const wildDog1=new WildDog();
const dogAdaptor=new DogAdaptor(wildDog1);
const hunter2=new Hunter(dogAdaptor);
hunter2.hunt();
