const { Console } = require("@woowacourse/mission-utils");
const GAME_MESSAGE = require("./util/Constant");

class App {
  play() {
    Console.print(GAME_MESSAGE.START_MESSAGE);
  }
}
const baseball = new App();
baseball.play();
module.exports = App;
