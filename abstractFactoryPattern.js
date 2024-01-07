class WoodenDoor {
  description() {
    console.log('this is a wooden door');
  }
}
class IronDoor {
  description() {
    console.log('This is a iron door');
  }
}
class Carpenter {
    description() {
    console.log('Making wooden door');
  }
}
class Welder {
    description() {
    console.log('Making iron door');
  }
}
class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }
  makeFittingExpert() {
    return new Carpenter();
  }
}
class IronDoorFactory {
  makeDoor() {
    return new IronDoor();
  }
  makeFittingExpert() {
    return new Welder();
  }
}
const wF=new WoodenDoorFactory();
const wD=wF.makeDoor();
wD.description();
const wM=wF.makeFittingExpert();
wM.description();
const iF=new IronDoorFactory();
const door=iF.makeDoor();
door.description();