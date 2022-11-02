const BaseballModel = require('./model/BaseballModel');
const BaseballController = require('./controller/BaseballController');

class App {
  constructor() {
    this.baseballModel = new BaseballModel();
    this.baseballController = new BaseballController(this.baseballModel);
  }

  play() {
    this.baseballController.getUserValue();
  }
}

const app = new App();
app.play();

module.exports = App;
