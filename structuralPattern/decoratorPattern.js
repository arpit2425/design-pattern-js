class Espresso {
  getCost() {
    return 200;
  }
  getDescription() {
    return `Welcome to starBucks this is your Espresso`;
  }
}
class Cappaccino {
  constructor(coffee) {
    this.coffee = coffee;
  }
  getCost() {
    return this.coffee.getCost() + 100;
  }
  getDescription() {
    return this.coffee.getDescription() + ' with some milk';
  }
}
class Macchiatto {
  constructor(coffee) {
    this.coffee = coffee;
  }
  getCost() {
    return this.coffee.getCost() + 50;
  }
  getDescription() {
    return `${this.coffee.getDescription()} with some chocolate`;
  }
}
class ExtraShot {
  constructor(coffee) {
    this.coffee = coffee;
  }
  getCost() {
    return this.coffee.getCost() + 60;
  }
  getDescription() {
    return `${this.coffee.getDescription()} with extra shot`;
  }
}
const esp = new Espresso();
const customer1Cofffe = new Cappaccino(esp);
console.log(customer1Cofffe.getCost());
console.log(customer1Cofffe.getDescription());
const extraShot = new ExtraShot(esp);
const cappa = new Cappaccino(extraShot);
const arpitCoffee = new Macchiatto(cappa);
console.log(arpitCoffee.getCost());
console.log(arpitCoffee.getDescription());
