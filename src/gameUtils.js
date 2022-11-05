const MissionUtils = require("@woowacourse/mission-utils");

class System {
  static get answer() {
    let answer = new Set();
    System.#addNumber(answer);
    answer = [...answer];
    return answer;
  }
  static #addNumber(numbers) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    numbers.add(randomNumber);
    if(numbers.size < 3) System.#addNumber(numbers);
  }

  static getResult(input, answer) {
    const result = {
      strike: 0,
      ball: 0,
    }
    input.forEach((inputNumber, idx) => {
      const answerNumber = answer[idx];
      if(System.#isStrike(inputNumber, answerNumber)) return result.strike++;
      if(System.#isBall(inputNumber, answer)) return result.ball++;
    });
    return result;
  }
  static #isStrike(inputNumber, answerNumber) {
    return inputNumber === answerNumber;
  }
  static #isBall(inputNumber, answer) {
    return answer.includes(inputNumber);
  }
}

exports.System = System;