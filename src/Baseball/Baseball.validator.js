const BaseballDto = require('./Baseball.dto');

class BaseballValidator {
  static checkInputNumbers(userNumbers) {
    this.#checkNumbersLength(userNumbers);
    this.#checkNumericNumbers(userNumbers);
    this.#checkDuplicateNumbers(userNumbers);
  }
  static #checkNumericNumbers(numbers) {
    if (numbers === undefined) {
      throw new Error('알 수 없는 입력값입니다.');
    }

    if (isNaN(+numbers)) {
      throw new Error('숫자가 아닌 입력값입니다.');
    }

    const nonNumerics = Array.from(numbers).filter(
      (number) => '1' > number || number > '9',
    );
    if (nonNumerics > 0) {
      throw new Error('숫자가 아닌 값이 있습니다.');
    }
  }

  static #checkNumbersLength(numbers) {
    if (numbers.length !== 3) {
      throw new Error('글자가 3개가 아닙니다.');
    }
  }

  static #checkDuplicateNumbers(numbers) {
    const removedDuplicateNumbers = Array.from(new Set(numbers));
    if (removedDuplicateNumbers.length !== numbers.length) {
      throw new Error('중복된 입력값입니다.');
    }
  }

  static checkBallState(computerNumbers, userNumbers) {
    const baseballDto = new BaseballDto();

    Array.from(userNumbers).forEach((userNumber, index) => {
      if (this.#isStrike(computerNumbers[index], userNumber)) {
        baseballDto.addStrikeOne();
      }
      if (this.#isBall(computerNumbers, userNumber, index)) {
        baseballDto.addBallOne();
      }
    });

    return baseballDto;
  }

  static #isStrike(computerNumber, userNumber) {
    return computerNumber === +userNumber;
  }

  static #isBall(computerNumbers, userNumber, userNumberIndex) {
    let isBall = false;

    computerNumbers.forEach((computerNumber, index) => {
      if (
        this.#isStrike(computerNumber, userNumber) &&
        userNumberIndex !== index
      ) {
        isBall = true;
      }
    });

    return isBall;
  }

  static isFinish(baseballDto) {
    return baseballDto.strike === 3;
  }

  static checkRestartValue(restartValue) {
    if (!(+restartValue === 1 || +restartValue === 2)) {
      throw new Error('잘못된 입력값입니다.');
    }
    return +restartValue === 1;
  }
}

module.exports = BaseballValidator;
