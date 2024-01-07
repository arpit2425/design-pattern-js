const invoker = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
};
let manager = {
  envoke: function (name, ...args) {
    if (name in invoker) {
      return invoker[name](...args);
    }
    return false;
  },
};

console.log(manager.envoke('add', 2, 3));
console.log(manager.envoke('subtract', 2, 3));
console.log(manager.envoke('multiply', 2, 3));
console.log(manager.envoke('divide', 2, 3));


