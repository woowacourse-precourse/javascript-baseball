const { Console } = require("@woowacourse/mission-utils");
const getResultMessage = require("./functions/getResultMessage");
const makeRandomNumber = require("./functions/makeRandomNumber");
const isInvalidCmd = require("./functions/isInvalidCmd");
const isInvalidNumber = require("./functions/isInvalidNumber");

class Game {
  random;
  getUserAnswer() {
    Console.readLine("숫자를 입력해주세요 :", (input) => {
      if (isInvalidNumber(input)) throw new Error("Invalid Input!!");

      Console.print(getResultMessage(this.random, input));

      if (input === this.random) {
        this.finishGame();
      } else {
        this.getUserAnswer();
      }
    });
  }

  finishGame() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    Console.readLine("", (cmd) => {
      if (isInvalidCmd(cmd)) {
        throw new Error("Invalid Command!");
      }
      if (cmd === "1") {
        this.start();
      } else {
        Console.close();
      }
    });
  }

  start() {
    this.random = makeRandomNumber();
    this.getUserAnswer();
  }
}

module.exports = Game;
