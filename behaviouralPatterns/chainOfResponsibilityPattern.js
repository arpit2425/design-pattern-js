//For example, you have three payment methods (A, B and C) setup in your account each having a different amount in it. A has 100 USD, B has 300 USD and C having 1000 USD and the preference for payments is chosen as A then B then C. You try to purchase something that is worth 210 USD. Using Chain of Responsibility, first of all account A will be checked if it can make the purchase, if yes purchase will be made and the chain will be broken. If not, request will move forward to account B checking for amount if yes chain will be broken otherwise the request will keep forwarding till it finds the suitable handler. Here A, B and C are links of the chain and the whole phenomenon is Chain of Responsibility.

class Account {
  constructor(account) {
    this.succesor = account;
  }
  //   setNext(account) {
  //     this.succesor = account;
  //   }
  pay(amount) {
    if (this.canPay(amount)) {
      console.log('payment successful');
    } else if (this.succesor) {
      console.log('Dont have enough balance transferring to process from another account');
      this.succesor.pay(amount);
    } else {
      console.log('Dont have enough balance in any account');
    }
  }
  canPay(amount) {
    return this.balance >= amount;
  }
}
class Bank extends Account {
  constructor(balance, account) {
    super(account);
    this.name = 'bank';
    this.balance = balance;
  }
}
class CreditCard extends Account {
  constructor(balance, account) {
    super(account);
    this.name = 'credit card';
    this.balance = balance;
  }
}
class Wallet extends Account {
  constructor(balance, account) {
    super(account);
    this.name = 'wallet';
    this.balance = balance;
  }
}
const wallet = new Wallet(100, new Bank(200, new CreditCard(1000)));
// const bank = new Bank(200);
// const cc = new CreditCard(1000);
// wallet.setNext(bank);
// bank.setNext(cc);
wallet.pay(300);

wallet.pay(3000);
