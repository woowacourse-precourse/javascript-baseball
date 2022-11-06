const utils = require("./utlils");
const { Console } = require("@woowacourse/mission-utils");
class BaseballGame {
  constructor() {
    this.targetNumber = utils.getTargetNumber();
  }

  startGame() {
    this.startRound();
    // targetNumber을 찾을때 까지 round를 진행합니다.
    // targetNumber를 찾았다면 restart 로직을 추가합니다.
  }

  startRound() {
    Console.readLine("숫자를 입력해주세요 : ", (userInputNumber) => {
      console.log(userInputNumber);
    });
    // 입력을 통해서 힌트를 출력하는 로직으로 구성이 되어 있습니다. (이 과정에서 오류를 관리합니다.)
  }
}

module.exports = BaseballGame;
