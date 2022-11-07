class App {
  constructor() {
    this.computer = 1;
  }
  play() {
    MissionUtils.Console.print(MESSAGES.INIT);
    this.proceedGame();
  }

  proceedGame(){

  }
}

const app = new App();
app.play();

module.exports = App;
