const outputView = require('./OutputView');
const Controller = require('./Controller');
const BaseballGame =require('./BaseballGame');

class App {

  constructor () {
    this.controller = new Controller();
    // this.baseballGame = new BaseballGame();
    }

  play () {
    outputView.printStartGame();
    // this.baseballGame.setRandomNumber();
    this.controller.startGame();
  }

}

const app = new App();
app.play();

module.exports = App;
