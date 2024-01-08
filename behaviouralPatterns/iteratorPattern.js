class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }
  hasNext() {
    return this.index < this.collection.length;
  }
  next() {
    return this.hasNext() ? this.collection[this.index++] : null;
  }
}
class NumberCollection {
  constructor() {
    this.numbers = [];
  }
  addNumber(number) {
    this.numbers.push(number);
  }
  iterator() {
    return new Iterator(this.numbers);
  }
}
const numbers = new NumberCollection();
numbers.addNumber(1);
numbers.addNumber(12);
numbers.addNumber(3);
numbers.addNumber(6);
numbers.addNumber(7);
numbers.addNumber(98);
const iterator = numbers.iterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
