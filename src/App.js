const BaseballGameModel = require('./model/BaseballGameModel');
const BaseballGameController = require('./controller/BaseballGameController');

class App {
  constructor() {
    this.baseballGameModel = new BaseballGameModel();
    this.baseballGameController = new BaseballGameController(this.baseballGameModel);
  }

  play() {
    this.baseballGameController.getUserValue();
  }
}

const app = new App();
app.play();

module.exports = App;
