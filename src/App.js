const BaseballGameController = require('./BaseballGameController');

class App {
  play() {
    BaseballGameController.start();
  }
}

module.exports = App;
