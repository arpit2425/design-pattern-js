let publishSubscriber = {};
(function (container) {
  let id = 0;
  container.subscribe = function (topic, cb) {
    if (!container[topic]) {
      container[topic] = [];
    }
    container[topic].push({ id: id++, callback: cb });
    return id - 1;
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
let subscription1 = publishSubscriber.subscribe('back_in_stock', function (data) {
  console.log(`Hi user item ${data} is back in stock`);
});

let subscription2 = publishSubscriber.subscribe('sale', function (data) {
  console.log(`Hi user item ${data} is in sale with great discounts`);
});
let subscription3 = publishSubscriber.subscribe('sale', function (data) {
  console.log(`Hi user item ${data} is in sale with great discounts`);
});
publishSubscriber.publish('sale', 'Z fold');
publishSubscriber.unsubscribe('sale', subscription3);
console.log('after unsubscribing');
publishSubscriber.publish('sale', 'Z fold');

class JobPortal {
  constructor() {
    this.subscribers = {};
  }
  subscribe(job, jobSeeker) {
    if (!this.subscribers[job]) {
      this.subscribers[job] = [];
    }
    this.subscribers[job].push(jobSeeker);
  }
  notify(job) {
    for (let subscriber of this.subscribers[job]) {
      subscriber.notify(job);
    }
  }
}
class JobSeeker {
  constructor(name) {
    this.name=name;
  }
  notify(job) {
    console.log(`Hi ${this.name} ,There is a job opening for ${job} role`);
  }
}
const jobPortal=new JobPortal();
const user1=new JobSeeker('Arpit');
const user2=new JobSeeker('Pika');
const user3=new JobSeeker('Jimmy');
jobPortal.subscribe('Java',user1);
jobPortal.subscribe('JavaScript',user1);
jobPortal.subscribe('Devops',user2);
jobPortal.subscribe('JavaScript',user2);
jobPortal.subscribe('Frontend',user3);
jobPortal.notify('Java');
jobPortal.notify('JavaScript');
jobPortal.notify('Frontend')