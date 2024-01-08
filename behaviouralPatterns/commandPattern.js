class Bulb {
  turnOn() {
    console.log('turning on bulb');
  }
  turnOff() {
    console.log('turning bulb off');
  }
}
class Televison{
    turnOn() {
        console.log('turning on Televison');
      }
      turnOff() {
        console.log('turning Televison off');
      }
}
class TurnOn {
  constructor(appliance) {
    this.appliance = appliance;
  }
  execute() {
    this.appliance.turnOn();
  }
  undo() {
    this.appliance.turnOff();
  }
}
class TurnOff {
  constructor(appliance) {
    this.appliance = appliance;
  }
  execute() {
    this.appliance.turnOff();
  }
  undo() {
    this.appliance.turnOn();
  }
}
class RemoteController {
  submit(command) {
    command.execute();
  }
}
const bulb1=new Bulb();
const tv=new Televison();
const turnOffTv=new TurnOff(tv);
const turnOnTv=new TurnOn(tv);
const turnOnBulb=new TurnOn(bulb1);
const turnOffBulb=new TurnOff(bulb1);
const bulbRemote=new RemoteController();
const tvRemote=new RemoteController();
bulbRemote.submit(turnOnBulb);
bulbRemote.submit(turnOffBulb);
tvRemote.submit(turnOffTv);
tvRemote.submit(turnOnTv);