const MissionUtils = require("@woowacourse/mission-utils");

class BaseballGame {
  constructor() {
    this.replay = false;
  }
  init() {
    if (!this.replay) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }
    this.computerNumber = this.pickUniqueNumbers();
  }

  pickUniqueNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  checkValidation(checkNumber) {
    const checkNumberSplit = new Set([...checkNumber]);
    if (checkNumberSplit.length < 3 || checkNumber.length !== 3) {
      throw new Error("입력한 숫자는 서로다른 3개의 숫자이어야 합니다.");
    }
    checkNumberSplit.forEach((element) => {
      if (element < 1 || element > 9) {
        throw new Error("1 ~ 9사이의 숫자만 입력 가능합니다.");
      }
    });
  }

  play() {
    this.init();
  }
}
module.exports = BaseballGame;
