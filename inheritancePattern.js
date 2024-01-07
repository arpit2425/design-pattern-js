function Beverage(name,temperature){
    this.name=name;
    this.temperature=temperature;
}
Beverage.prototype.drink=function(){
    console.log(`I am drinking ${this.name}`)
}
function Coffee(type){
    this.type=type;
    Beverage.call(this,'coffee','hot')
}
Coffee.prototype=Object.create(Beverage.prototype) // or Coffee.prototype=new Beverage()
Coffee.prototype.sip=function(){
    console.log(`I am sipping the ${this.name}`)
}
let coffee=new Coffee('dark roast')
let water=new Beverage('water','cold')
coffee.sip()
coffee.drink()
water.drink()
