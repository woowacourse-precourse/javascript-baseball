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
    console.log(inputNumbers)
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

  
}

module.exports = App;
