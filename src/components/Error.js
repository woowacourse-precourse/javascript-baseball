class Error {
  check(userInput) {
    this.checkLength(userInput);
    this.checkIsNumber(userInput);
    this.checkDuplicate(userInput);
    this.checkIncludesZero(userInput);
    this.checkEmpty(userInput);
  }

  checkLength(userInput) {
    if (String(userInput).length !== 3) {
      throw '세 자리 숫자가 아닙니다.'
    }
  }

  checkIsNumber(userInput) {
    if (isNaN(Number(userInput))) {
      throw '입력된 문자열이 숫자가 아닙니다.';
    }
  }

  checkDuplicate(userInput) {
    if (new Set([...userInput]).size < 3) {
      throw '중복된 숫자를 입력하셨습니다.'
    }
  }

  checkIncludesZero(userInput) {
    if (String(userInput).includes('0')) {
      throw '입력된 수에 0이 포함되어 있습니다.';
    }
  }

  checkEmpty(userInput) {
    if (!userInput) {
      throw '아무것도 입력되지 않았습니다.';
    }
  }

  print() {
    throw '잘못된 값을 입력하셨습니다.';
  }
}

module.exports = Error;