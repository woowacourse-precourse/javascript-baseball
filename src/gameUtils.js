const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("./data/constants.js");

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

class Validator {
  static isVaildAnswer(value) {
    if(Validator.#isNotThreeLength(value)) throw new Error(constants.ERROR_MESSAGE.NOT_THREE_LENGTH);
    if(Validator.#isOutOfRange(value)) throw new Error(constants.ERROR_MESSAGE.NOT_NUMBER_RANGE);
    if(Validator.#isDuplicated(value)) throw new Error(constants.ERROR_MESSAGE.IS_DUPLICATED);
  }
  static #isNotThreeLength(value) {
    if(value.length !== 3) return true;
    return false;
  }
  static #isOutOfRange(value) {
    let result = false;
    value.forEach(Number => {
      if(isNaN(+Number) || Number < 1) result = true;
    });
    return result;
  }
  static #isDuplicated(value) {
    return ([...new Set(value)].length !== 3);
  }

  static isVaildRestartSubmit(value) {
    if(![1, 2].includes(+value)) throw new Error(constants.ERROR_MESSAGE.IS_INVALID_RESTART_SUBMIT);
  }
}

exports.System = System;
exports.Validator = Validator;