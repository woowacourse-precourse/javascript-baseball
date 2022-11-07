const { Console } = require("@woowacourse/mission-utils");
const GAME_MESSAGE = require("./util/Constant");
const makeNumber = require("./MakeNumber");

class App {
  constructor() {
    this.answer = makeNumber();
  }
  play() {
    Console.print(GAME_MESSAGE.START_MESSAGE);
  }
}
const baseball = new App();
baseball.play();
module.exports = App;
