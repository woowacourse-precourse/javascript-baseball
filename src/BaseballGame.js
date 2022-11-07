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

  countStrikeBall(inputUser, computer) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < inputUser.length; i++) {
      const index = inputUser.indexOf(computer[i]);
      if (index <= -1) {
        continue;
      }
      if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
    return { ball, strike };
  }

  printStrikeBall(ball, strike) {
    let message;
    if (strike === 0 && ball === 0) {
      message = "낫싱";
    } else if (strike === 0 && ball > 0) {
      message = `${ball}볼`;
    } else if (strike > 0 && ball === 0) {
      message = `${strike}스트라이크`;
    } else if (strike > 0 && ball > 0) {
      message = `${ball}볼 ${strike}스트라이크`;
    }
    return MissionUtils.Console.print(message);
  }

  getMessage(computerNumber) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      const { ball, strike } = this.countStrikeBall(
        input.split("").map(Number),
        this.computerNumber
      );
      this.checkValidation(input);
      this.printStrikeBall(ball, strike);
    });
  }

  play() {
    this.init();
    this.getMessage(this.computerNumber);
  }
}
module.exports = BaseballGame;
