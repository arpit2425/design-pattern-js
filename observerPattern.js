let publishSubscriber = {};
(function (container) {
  let id = 0;
  container.subscribe = function (topic, cb) {
    if (!container[topic]) {
      container[topic] = [];
    }
    container[topic].push({ id: id++, callback: cb });
    return id-1;
  };
  container.unsubscribe = function (topic, id) {
    let newList = [];
    for (let channel of container[topic]) {
      if (channel.id !== id) {
        newList.push(channel);
      }
    }
    container[topic] = newList;
  };
  container.publish = function (topic, data) {
    for (let channel of container[topic]) {
      channel.callback(data);
    }
  };
})(publishSubscriber);
let subscription1=publishSubscriber.subscribe('back_in_stock',function(data){
    console.log(`Hi user item ${data} is back in stock`)
})

let subscription2=publishSubscriber.subscribe('sale',function(data){
    console.log(`Hi user item ${data} is in sale with great discounts`)
})
let subscription3=publishSubscriber.subscribe('sale',function(data){
    console.log(`Hi user item ${data} is in sale with great discounts`)
})
publishSubscriber.publish('sale','Z fold')
publishSubscriber.unsubscribe('sale',subscription3)
console.log('after unsubscribing')
publishSubscriber.publish('sale','Z fold')