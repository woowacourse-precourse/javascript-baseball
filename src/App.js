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

module.exports = App;
