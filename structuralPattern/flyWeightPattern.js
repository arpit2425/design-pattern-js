//The Flyweight Pattern is a structural design pattern that aims to minimize memory usage or computational expenses by sharing as much as possible with related objects

class TreeFlyWeightFactory {
  constructor() {
    this.treeTypes = {};
  }
  getTreeType(type) {
    if (!this.treeTypes[type]) {
      this.treeTypes[type] = new TreeType(type);
    }
    return this.treeTypes[type];
  }
}
class TreeType {
  constructor(type) {
    this.type = type;
  }
  render(position) {
    console.log(`Rendering ${this.type} tree at position ${JSON.stringify(position)}`);
  }
}
class Tree {
  constructor(type, position) {
    this.treeType = type;
    this.position = position;
  }
  render() {
    return this.treeType.render(this.position);
  }
}
class Game {
  constructor() {
    this.treeFlyWeightFactory = new TreeFlyWeightFactory();
    this.trees = [];
  }
  plantTree(type, position) {
    const treeType = this.treeFlyWeightFactory.getTreeType(type);
    const tree = new Tree(treeType, position);
    this.trees.push(tree);
  }
  renderGame() {
    for (let tree of this.trees) {
      tree.render();
    }
  }
}
const game = new Game();
game.plantTree('Pine', { x: 10, y: 20 });
game.plantTree('Oak', { x: 30, y: 40 });
game.plantTree('Pine', { x: 50, y: 60 });
game.renderGame();
