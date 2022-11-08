class InputValidation {
  //숫자인가?
  isNumber(input) {
    const regex = /^[0-9]+$/;
    if (!regex.test(input)) {
      return false;
    }
    return true;
  }

  //세자리인가?
  isThreeDigits(input) {
    if (input.length !== 3) {
      return false;
    }
    return true;
  }

  //각각의 숫자가 다른 숫자인가?
  isUniqueDigits(input) {
    let inputArr = input.toString().split('');
    if (new Set(inputArr).size !== 3) {
      return false;
    }
    return true;
  }

  isValidInput(input) {
    if (this.isNumber(input) === false) {
      throw '숫자만 입력할 수 있습니다.';
    }
    if (this.isThreeDigits(input) === false) {
      throw '세자리 수를 입력해주세요.';
    }
    if (this.isUniqueDigits(input) === false) {
      throw '각 자리수가 중복되지 않게 입력해주세요.';
    }
    return true;
  }
}

module.exports = InputValidation;
