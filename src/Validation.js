const { ERROR_MESSEGE } = require("./constant");

class Validation {
  isSingleDigitNaturalNumber(inputNumber) {
    const regExp = new RegExp("^[1-9]+$");
    if (!regExp.test(inputNumber)) {
      throw ERROR_MESSEGE.isSingleDigitNaturalNumber;
    }
  }

  isNumberWithoutDuplicate(inputNumber) {
    const wordLengthWidhoutDuplicate = new Set([...inputNumber]).size;
    if (wordLengthWidhoutDuplicate !== 3) {
      throw ERROR_MESSEGE.isNumberWithoutDuplicate;
    }
  }

  isConfirmInput() {
    throw ERROR_MESSEGE.isConfirmInput;
  }
}
module.exports = Validation;
