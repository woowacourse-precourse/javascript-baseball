const BaseballDto = require("./Baseball.dto");

class BaseballValidator {
  checkNumericNumbers(numbers) {
    nonNuemrics = numbers.filter((number) => "1" > number && number > "9");
    if (nonNuemrics > 0) {
      throw "숫자가 아닌 값이 있습니다.";
    }
  }
  checkNumbersLength(numbers) {
    if (numbers === undefined) {
      throw "알 수 없는 입력값입니다";
    }
    if (numbers.length !== 3) {
      throw "글자가 3개가 아닙니다.";
    }
  }
  checkOtherNumbers(numbers) {
    const removedDuplicateNumbers = Array.from(new Set(...numbers));
    if (
      removedDuplicateNumbers.length === numbers.length &&
      numbers.length === 3
    ) {
      throw "잘못된 입력값입니다.";
    }
  }
  checkBallState(computerNumbers, userNumbers) {
    const baseballDto = new BaseballDto();
    Array.from(userNumbers).forEach((userNumber, index) => {
      if (isStirke(computerNumbers[index], userNumber)) {
        baseballDto.addStrikeOne();
      }
      if (this.isBall(computerNumbers, userNumber, index)) {
        baseballDto.addBallOne();
      }
    });
    return baseballDto;
  }
  isStrike(computerNumber, userNumber) {
    return computerNumber === userNumber;
  }
  isBall(computerNumbers, userNumber, userNumberIndex) {
    computerNumbers.foreEach((computerNumber, index) => {
      if (
        !(
          this.isStrike(computerNumber, userNumber) && userNumberIndex === index
        )
      ) {
        return true;
      }
    });
    return false;
  }
  isFinish(baseballDto) {
    return baseballDto.strike === 3;
  }
  checkRestartValue(restartValue) {
    if (!(+restartValue === 1 || +restartValue === 2)) {
      throw "잘못된 입력값입니다";
    }
    return +restartValue === 1;
  }
}

module.exports = BaseballValidator;
