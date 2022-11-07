const MissionUtils = require("@woowacourse/mission-utils");

const INPUT_NUMBER_MESSAGE = "숫자를 입력해주세요 :";

class App {
  play() {}

  getRandomNum() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }

  getComputerNum() {
    let computerNum = [];

    let num;

    while (computerNum.length < 3) {
      num = this.getRandomNum();
      if (!computerNum.includes(num)) {
        computerNum.push(num);
      }
    }

    return computerNum;
  }

  printGameMsg(message) {
    MissionUtils.Console.print(message);
  }

  inputPlayerNum() {
    let playerNum;

    MissionUtils.Console.readLine(INPUT_NUMBER_MESSAGE, (input) => {
      playerNum = input;
    });

    return playerNum;
  }
}

module.exports = App;
