const BaseballGameModel = require('./model/BaseballGameModel');

class App {
  constructor() {
    this.baseballGameModel = new BaseballGameModel();
  }

  play() {}
}

module.exports = App;
