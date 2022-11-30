const BaseballGameController = require('./BaseballGameController');
const InputView = require('./view/InputView');

class App {
  play() {
    BaseballGameController.start();
    InputView.readUserNumber();
  }
}

module.exports = App;
