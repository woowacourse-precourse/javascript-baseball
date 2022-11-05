const { Console } = require("@woowacourse/mission-utils");
const makeRandomNumber = require("./utils/makeRandomNumber");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const randomNum = makeRandomNumber();
    this.gameStart(randomNum);
  }

  gameStart(answer) {}
}

module.exports = App;
