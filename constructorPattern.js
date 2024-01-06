//there are 3 ways to create object

let instance1 = {};
let instance2 = new Object();
let instance3 = Object.create(Object.prototype);

//adding properties in object
instance1['key'] = 'value';
instance2.key = 'value';

//define single property
Object.defineProperty(instance3, 'key', {
  value: 'value',
  writable: true,
  configurable: false,
  enumerable: true,
});

//definig multiple properties
Object.defineProperties(
  instance1,
  {
    key1: {
      value: 'v1',
      writable: true,
    },
  },
  {
    key2: {
      value: 'v2',
      writable: true,
    },
  },
);

//defining constructor

function Person(name, age, isDeveloper) {
  this.name = name;
  this.age = age;
  this.isDeveloper = isDeveloper || false;
  this.writesCode = function () {
    console.log(this.isDeveloper ? 'This person does write code' : 'This person does not write code');
  };
}

let p1 = new Person('arpit', '24', true);
let p2 = new Person('java', '24');
p1.writesCode();
p2.writesCode();

//The problem with the above approach is that the method writesCode gets redefined for each of the instances of the Person constructor. We can avoid this by setting the method into the function prototype.
function PersonType2(name, age, isDeveloper) {
  this.name = name;
  this.age = age;
  this.isDeveloper = isDeveloper || false;
}
PersonType2.prototype.writesCode = function () {
  console.log(this.isDeveloper ? 'This person does write code' : 'This person does not write code');
};

const pt1 = new PersonType2('arpit', '24', true);
const pt2 = new PersonType2('java', '24');
pt1.writesCode();
pt2.writesCode();

//Now, both instances of the Person constructor can access a shared instance of the writesCode() method.

//closures (this is how we can mimic private behaviour as counter can't be accessed outside)
var counterIncrementer = (function () {
  var counter = 0;

  return function () {
    return ++counter;
  };
})();

// prints out 1
console.log(counterIncrementer());
// prints out 2
console.log(counterIncrementer());
//undefined
console.log(counterIncrementer.counter);

counterIncrementer.counter = 5;
// will still prints out 3
console.log(counterIncrementer());

//acheive public and private behaviour using closures

let properties = (function () {
  let datas = [];
  return {
    addData: function (data) {
      datas.push(data);
    },
    removeData: function () {
      datas.pop();
    },
    getDatas: function () {
      return JSON.parse(JSON.stringify(datas));
    },
  };
})();

properties.addData('arpit');
properties.addData('golang');
console.log(properties.getDatas());

//restructuring by seperation of private and public properties


var namesCollection = (function() {
    // private members
    var objects = [];

    function addObject(object) {
        objects.push(object);
    }

    function removeObject(object) {
        var index = objects.indexOf(object);
        if (index >= 0) {
            objects.splice(index, 1);
        }
    }

    function getObjects() {
        return JSON.parse(JSON.stringify(objects));
    }

    // public members
    return {
        addName: addObject,
        removeName: removeObject,
        getNames: getObjects
    };
})();


namesCollection.addName('arpit')
namesCollection.addName('golang')
namesCollection.addName('rust')
namesCollection.addName('php')
namesCollection.addName('ts')
console.log(namesCollection.getNames())



