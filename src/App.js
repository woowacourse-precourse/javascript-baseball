const BaseballGameTools = require('./BaseballGameTools');

class App {
  constructor() {
    this.answerArray = [];
  }

  shuffleNumber() {
    this.answerArray = BaseballGameTools.getThreeNumber();
  }
}

module.exports = App;
