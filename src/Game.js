const { Console } = require("@woowacourse/mission-utils");
const getResultMessage = require("./functions/getResultMessage");
const makeRandomNumber = require("./functions/makeRandomNumber");

class Game {
  random;
  getUserAnswer() {
    Console.readLine("숫자를 입력해주세요 :", (input) => {
      let result = getResultMessage(this.random, input);
      Console.print(result);
      if (input === this.random) {
        //게임 종료
      } else {
        this.getUserAnswer();
      }
    });
  }

  start() {
    this.random = makeRandomNumber();
    this.getUserAnswer();
  }
}

module.exports = Game;
