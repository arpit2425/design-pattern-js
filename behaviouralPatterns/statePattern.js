/* 
It lets you change the behavior of a class when the state changes.
Let's take an example of text editor, it let's you change the state of text that is typed i.e. if you have selected bold, it starts writing in bold, if italic then in italics etc.
*/
const upperCase = (inputText) => inputText.toUpperCase();
const lowerCase = (inputText) => inputText.toLowerCase();
const defaultTransform = (inputString) => inputString;
class Editor {
  #transform;
  constructor(transform) {
    this.#transform = transform;
  }
  setTransform(transform) {
    this.#transform = transform;
  }
  type(words) {
    return this.#transform(words);
  }
}
const editor = new Editor(defaultTransform);
console.log(editor.type('I am typing something'));
editor.setTransform(upperCase);
console.log(editor.type('I am typing something else'));

//another vending machine example

class VendingMachine {
  constructor() {
    this.state = new NoCoinState(this);
    this.balance = 0;
  }
  setState(state) {
    this.state = state;
  }
  insertCoin(amount) {
    this.state.insertCoin(amount);
  }
  selectProduct(productPrice) {
    this.state.selectProduct(productPrice);
  }
  returnCoins() {
    this.state.returnCoins();
  }
}
class VendingMachineState {
  constructor(machine) {
    this.machine = machine;
  }

  insertCoin(amount) {
    throw new Error('insertCoin method not implemented');
  }

  selectProduct(productPrice) {
    throw new Error('selectProduct method not implemented');
  }

  returnCoins() {
    throw new Error('returnCoins method not implemented');
  }
}
class NoCoinState extends VendingMachineState {
  insertCoin(amount) {
    console.log(`Inserted ${amount} coins.`);
    this.machine.balance += amount;
    this.machine.setState(new HasCoinState(this.machine));
  }
  selectProduct(productPrice) {
    console.log('Please insert coins first.');
  }
  returnCoins() {
    console.log('No coins to return.');
  }
}
class HasCoinState extends VendingMachineState {
  insertCoin(amount) {
    console.log(`Inserted additional ${amount} coins.`);
    this.machine.balance += amount;
  }
  selectProduct(productPrice) {
    if (this.machine.balance == productPrice) {
      console.log(`Product purchased! Balance: ${this.machine.balance - productPrice}`);
      this.machine.balance = 0;
      this.machine.setState(new NoCoinState(this.machine));
    } else {
      console.log('Insufficient balance. Please insert more coins.');
    }
  }
  returnCoins() {
    console.log(`Returned ${this.machine.balance} coins.`);
    this.machine.balance = 0;
    this.machine.setState(new NoCoinState(this.machine));
  }
}
const vendingMachine = new VendingMachine();
vendingMachine.selectProduct(5);
vendingMachine.insertCoin(2);
vendingMachine.selectProduct(3);
vendingMachine.insertCoin(3);
vendingMachine.selectProduct(2);
vendingMachine.returnCoins();

//more simplified example

class LightSwitch {
  constructor() {
    this.state = new OffState();
  }
  setState(state) {
    this.state = state;
  }
  toggle() {
    this.state.toggle(this);
  }
}
class SwitchState {
  toggle(switchContext) {
    throw new Error('toggle method not implemented');
  }
}
class OffState extends SwitchState{
    toggle(switchContext){
        console.log("Turning the light off.");
        switchContext.setState(new OnState());
    }
}
class OnState extends SwitchState{
    toggle(switchContext){
        console.log("Turning the light on.");
        switchContext.setState(new OffState());
    }
}
const lightSwitch=new LightSwitch();
lightSwitch.toggle();
lightSwitch.toggle();
lightSwitch.toggle();
lightSwitch.toggle();