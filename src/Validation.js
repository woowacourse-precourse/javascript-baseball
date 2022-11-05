class Validation {
  isValidationSingleDigitNaturalNumber(answer) {
    const regexp = new RegExp("^[1-9]+$");
    if (!regexp.test(answer)) {
      throw "1에서 9까지의 자연수를 입력해주세요";
    }
  }

  isValidationNumberWithoutDuplicate(answer) {
    let isValidation = false;
    const wordLengthWidhoutDuplicate = new Set([...answer]).size;

    [...answer].map((i) => {
      i === "" || i === " " ? (isValidation = true) : (isValidation = false);
    });

    if (wordLengthWidhoutDuplicate !== 3 || isValidation) {
      throw "서로 다른 3개의 숫자를 입력해주세요";
    }
  }
  isValidationConfirmInput(answer) {
    if (answer !== "1" || answer !== "2") {
      throw "새로 시작할려면 1, 종료하려면 2를 입력해주세요.";
    }
  }
}
module.exports = Validation;
