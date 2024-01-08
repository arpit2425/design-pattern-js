/* A downside would be that now we have introduced a single point of failure into our system, meaning if our mediator fails, the entire system could stop working.
 */
class ChatRoom {
  constructor() {}
  showMessage(user, message) {
    let name = user.getName();
    let time = new Date();
    console.log(`${time} [${name}]: ${message}`);
  }
}
class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
  }
  getName() {
    return this.name;
  }
  send(message) {
    this.chatRoom.showMessage(this, message);
  }
}
const mediator = new ChatRoom();
const jane = new User('Jane', mediator);
const john = new User('John', mediator);
jane.send('Hi John');
john.send('Hii');
