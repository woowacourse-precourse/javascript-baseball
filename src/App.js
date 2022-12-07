const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require('./View/InputView');
class App {
  play() {
    InputView.userInput();
  }
}
module.exports = App;

let a = new App();
a.play()