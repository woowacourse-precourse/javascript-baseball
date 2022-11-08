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

  printResult(playerInput) {
    const [ball, strike] = this.calcResult(playerInput);

    if (ball && strike) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (ball) {
      Console.print(`${ball}볼`);
    } else if (strike) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print("낫싱");
    }

    if (strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return this.restartGame();
    }

    return this.inputNumber(this.answer);
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
