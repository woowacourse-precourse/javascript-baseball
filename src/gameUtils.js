const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("./data/constants");

class System {
  static getRandomAnswer() {
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
  static toFilterdArray(input) {
    input = input.replace(/[\s,]/g, '');
    const arrayInput = input.split('').map(number => Number(number));
    return arrayInput;
  }
  static getResult(input, answer) {
    const result = {
      strike: 0,
      ball: 0,
    }
    input.forEach((inputNumber, idx) => {
      const answerNumber = answer[idx];
      if(System.#isStrike(inputNumber, answerNumber)) return result.strike += 1;
      if(System.#isBall(inputNumber, answer)) return result.ball += 1;
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
  static isInvalidAnswer(value) {
    if(Validator.#isNotThreeLength(value)) return constants.ERROR_MESSAGE.notThreeLength;
    if(Validator.#isOutOfRange(value)) return constants.ERROR_MESSAGE.notNumberRange;
    if(Validator.#isDuplicated(value)) return constants.ERROR_MESSAGE.isDuplicated;
    return false;
  }
  static #isNotThreeLength(value) {
    if(value.length !== 3) return true;
    return false;
  }
  static #isOutOfRange(value) {
    let result = false;
    value.forEach(number => {
      number = Number(number);
      if(Number.isNaN(number) || number < 1) result = true;
    });
    return result;
  }
  static #isDuplicated(value) {
    const removeDuplicatedValue = [...new Set(value)];
    return (removeDuplicatedValue.length !== 3);
  }
  static isInvalidRestartSubmit(value) {
    const possibleValue = [1, 2];
    if(!possibleValue.includes(value)) return constants.ERROR_MESSAGE.isInvalidRestartSubmit;
    return false;
  }
}

exports.System = System;
exports.Validator = Validator;
