const BaseballModel = require('./model/BaseballModel');
const BaseballController = require('./controller/BaseballController');
const BaseballView = require('./view/BaseballView');

class App {
  constructor() {
    this.baseballModel = new BaseballModel();
    this.baseballView = new BaseballView();
    this.baseballController = new BaseballController(this.baseballModel, this.baseballView);
  }

  play() {
    this.baseballModel.setComputerValue(this.baseballModel.getRandomNumbers());
    this.baseballController.triggerUserInput();
  }
}

const app = new App();
app.play();

module.exports = App;
