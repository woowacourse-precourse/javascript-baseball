class Validation {
  isSingleDigitNaturalNumber(inputNumber) {
    const regExp = new RegExp("^[1-9]+$");
    if (!regExp.test(inputNumber)) {
      throw "1에서 9까지의 자연수를 입력해주세요";
    }
  }

  //isSingleDigitNaturalNumber
  isNumberWithoutDuplicate(inputNumber) {
    const wordLengthWidhoutDuplicate = new Set([...inputNumber]).size;
    if (wordLengthWidhoutDuplicate !== 3) {
      throw "서로 다른 3개의 숫자를 입력해주세요";
    }
  }

  isConfirmInput() {
    throw "새로 시작할려면 1, 종료하려면 2를 입력해주세요.";
  }
}
module.exports = Validation;
