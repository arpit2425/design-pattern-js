class Computer {
  getPowerSupply() {
    console.log('getting power from source');
  }
  loadBootLoader() {
    console.log('starting boot loader');
  }
  connectWifi() {
    console.log('connecting wifi');
  }
  closeAllPrograms() {
    console.log('closing all programs');
  }
  showShutDownScreen() {
    console.log('shutting down');
  }
  cutPowerSupply() {
    console.log('cutting power supply');
  }
}
class ConmputerFacade{
    constructor(computer){
        this.computer=computer;
    }
    turnOnComputer(){
        this.computer.getPowerSupply();
        this.computer.loadBootLoader();
        this.computer.connectWifi();
    }
    turnOffComputer(){
        this.computer.closeAllPrograms();
        this.computer.showShutDownScreen();
        this.computer.cutPowerSupply();
    }
}
const mac=new Computer();
const operator=new ConmputerFacade(mac);
operator.turnOnComputer();
operator.turnOffComputer();