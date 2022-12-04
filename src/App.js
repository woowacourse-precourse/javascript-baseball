const Output = require("./view/OutputView.js");
const Input = require("./view/inputView.js");
const Controller = require("./controller/Constroller");
const Model = require("./model/Model");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.isRegame = 1;
    this.computerNumbers = null;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  play() {
    while (this.isRegame !== 2) {
      this.generateComputerNumbers();

      const input = this.inputNumbers();
      console.log(input);
      break;
    }
    MissionUtils.Console.close();
  }

  generateComputerNumbers() {
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    const computerNumbers = Array.from(computer);
    this.computerNumbers = computerNumbers;
  }

  inputNumbers() {
    console.log("inputNumbers");
    const inputNumbers = MissionUtils.Console.readLine(
      "숫자를 입력해주세요 : ",
      (rawInput) => {
        rawInput.split("").map((newNumber) => Number(newNumber));
      }
    );
    console.log(inputNumbers);
    this.inputNumbersValidate(inputNumbers);
  }

  inputNumbersValidate(inputNumbers) {
    console.log("inputNumbersValidate");
    const redundantNumbers = new Set(inputNumbers);
    for (const number of inputNumbers) {
      if (isNaN(Number(number))) {
        throw new Error();
      }
      if (1 > Number(number) || Number(number) > 9) {
        throw new Error();
      }
    }
    if (inputNumbers.length != 3) {
      throw new Error();
    }
    if (redundantNumbers.size !== 3) {
      throw new Error();
    }
    return numbers;
  }

  makeResultString({ countBall, countStrike }) {
    if (countStrike === 3) {
      return `${countStrike}스트라이크\n${countStrike}개의 숫자를 모두 맞히혔습니다! 게임 종료`;
    }
    if (0 < countStrike && countBall === 0) {
      return `${countStrike}스트라이크`;
    }
    if (0 < countBall && countStrike === 0) {
      return `${countBall}볼`;
    }
    if (0 < countBall && 0 < countStrike) {
      return `${countBall}볼 ${countStrike}스트라이크`;
    }
    if (0 === countBall && 0 === countStrike) {
      return `낫싱`;
    }
  }

  validateRegame(isRegame) {
    if (Number(isRegame) === 1 || Number(isRegame) === 2) {
      return Number(isRegame);
    } else {
      throw new Error();
    }
  }

  calculate() {
    const countStrike = this.countStrike();
    const countBall =
      this.countBall() - countStrike < 0 ? 0 : this.countBall() - countStrike;
    return { countBall, countStrike };
  }

  countBall() {
    return this.userNumbers.reduce((acc, cur) => {
      if (this.computerNumbers.includes(cur)) {
        acc++;
      }
      return acc;
    }, 0);
  }

  countStrike() {
    return this.userNumbers.reduce((acc, cur, idx) => {
      if (cur === this.computerNumbers[idx]) {
        acc++;
      }
      return acc;
    }, 0);
  }

  //고쳐야 됨
  shouldRegame() {
    return new Promise(function (resolve) {
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (numbers) => {
          resolve(Number(numbers));
        }
      );
    });
  }
}

module.exports = App;
