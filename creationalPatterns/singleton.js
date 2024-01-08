let singleTon=(function(){
    let instance;
    function init(values){
        this.size=values.size;
        this.value=values.value;
    }
    return {
        getInstance:function(values){
            if(!instance){
                instance=new init(values)
            }
            return instance; 

        }
    }
})()

// console.log(singleTon.getInstance({size:2,value:3}).size)
// console.log(singleTon.getInstance({size:5,value:6}).size)



class DBConnection {
    constructor(conString) {
        this.conString = conString
    }
  
    static getInstance(conString) {
      if (!this.instance) {
        this.instance = new DBConnection(conString);
      }
  
      return this.instance;
    }
  }
  
  let con1 = DBConnection.getInstance('mysqldb1');
  let con2 = DBConnection.getInstance('mysqldb2');
//   console.log("con1: "+con1.conString);
// console.log("con2: "+con2.conString);


class Singleton {
    constructor() {
      // Check if an instance already exists
      if (Singleton.instance) {
        return Singleton.instance;
      }
  
      // If no instance exists, create a new one
      this.property1 = "Singleton Property";
      this.property2 = "Another Property";
  
      // Save the instance in a static property
      Singleton.instance = this;
  
      // Ensure that the instance cannot be changed
      Object.freeze(Singleton.instance);
    }
  }
  
  // Usage
  const instance1 = new Singleton();
  console.log(instance1.property1); // Output: Singleton Property
  const instance2 = new Singleton();
  console.log(instance2 === instance1); // Output: true
  console.log(instance2.property2); // Output: Another Property
  
  