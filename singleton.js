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

console.log(singleTon.getInstance({size:2,value:3}).size)
console.log(singleTon.getInstance({size:5,value:6}).size)