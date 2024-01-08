class Db {
  constructor() {
    this.password;
  }
  setPassword(password) {
    this.password = password;
    console.log('password saved in db ');
  }
  getPassword() {
    return this.password;
  }
}
class Proxy {
  constructor() {
    this.db = new Db();
  }
  setPassword(password) {
    console.log('encrypting password before saving in db');
    this.db.setPassword(password);
  }
  getPassword() {
    let password = this.db.getPassword();
    console.log('decrypting password');
    return password;
  }
}
const dbProxy = new Proxy();
dbProxy.setPassword('p@ssW0rd');
console.log(dbProxy.getPassword());
