const BaseballGameModel = require('./model/BaseballGameModel');
const BaseballGameController = require('./controller/BaseballGameController');
const BaseballGameView = require('./view/BaseballGameView');

class App {
  constructor() {
    this.baseballGameModel = new BaseballGameModel();
    this.baseballGameView = new BaseballGameView();
    this.baseballGameController = new BaseballGameController(
      this.baseballGameModel,
      this.baseballGameView,
    );
  }

  play() {
    this.baseballGameController.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
