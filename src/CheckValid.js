// CheckValid
// @property: NUMBER_LIMIT,
// @args: 유저 입력값
// @func: 아래 조건을 전부 만족하는지 여부를 판별하는 함수
//  - 1. 유저가 입력한 값이 3글자인지 판별
//  - 2. 입력한 값이 숫자여야 한다.
//  - 3. 입력한 숫자가 1~9 사이에 있다
//  - 4. 입력한 숫자들 중 중복되는 값이 없어야 한다.

class CheckValid {
  constructor(NUMBER_LIMIT) {
    this.NUMBER_LIMIT = NUMBER_LIMIT;
  }

  validateInput(userInput) {
    return (
      this.validateInputLength(userInput) &&
      this.validateInputType(userInput) &&
      this.validateInputRange(userInput) &&
      this.validateInputDuplicated(userInput)
    );
  }

  validateInputLength(userInput) {
    const isInputThreeLength = userInput.length === this.NUMBER_LIMIT;
    return isInputThreeLength;
  }

  validateInputType(userInput) {
    const inputCastToNumber = Number(userInput);
    const isNumber = num => !Number.isNaN(num) && typeof num === 'number';

    return isNumber(inputCastToNumber);
  }

  validateInputRange(userInput) {
    const isZeroContain = [...userInput].includes('0');
    return isZeroContain === false;
  }

  validateInputDuplicated(userInput) {
    const isDuplicated = new Set([...userInput]).size !== this.NUMBER_LIMIT;
    return isDuplicated === false;
  }
}

module.exports = CheckValid;
