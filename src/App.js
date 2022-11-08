"use strict";

const MissionUtils = require("@woowacourse/mission-utils");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

class App {
  constructor() {
    this.answer = [];
  }

  play() {}

  generateRandomAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  inputNumber() {
    Console.readLine("숫자를 입력해주세요: ", (playerInput) => {
      const isValid = this.validateInput(playerInput);
      if (isValid) {
        playerInput = [...playerInput].map((input) => Number(input));
        return this.printResult(playerInput);
      }
      Console.close();
      throw new Error("사용자가 잘못된 값을 입력하였습니다.");
    });
  }

  validateInput(playerInput) {
    const INPUT_REGEX = /^[1-9]{3}$/;
    if (!INPUT_REGEX.test(playerInput)) {
      return false;
    }

    const noDuplicatedNumber = new Set([...playerInput]);
    if (noDuplicatedNumber.size !== 3) {
      return false;
    }

    return true;
  }

  calcResult(playerInput) {
    let [ball, strike] = [0, 0];

    [...playerInput].map((number, index) => {
      if (number === this.answer[index]) {
        strike++;
      } else if (this.answer.includes(number)) {
        ball++;
      }
    });

    return [ball, strike];
  }
}

module.exports = App;
