class Component {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log(this.name);
  }
}
class Leaf extends Component{
    constructor(name){
        super(name);
    }
}
class Composite extends Component{
    constructor(name){
        super(name);
        this.children=[];
    }
    addLeaf(child){
        this.children.push(child);
    }
    display(){
        console.log(this.name);
        for(let child of this.children){
            child.display();
        }
    }
}
const leaf1=new Leaf('abc.txt');
const leaf2=new Leaf('index.js');
const leaf3=new Leaf('main.py');
const workFolder=new Composite('work');
workFolder.addLeaf(leaf1);
workFolder.addLeaf(leaf2);
workFolder.addLeaf(leaf3);
workFolder.display();