class Valid {
  isValid(userNumberStr) {
    this.userNumberStr = userNumberStr;
    this.isValidSingleDigitNaturalNumber(userNumberStr);
    this.isValidNumberWithoutDuplicate(userNumberStr);
  }

  isValidSingleDigitNaturalNumber(userNumberStr) {
    const regexp = new RegExp("^[1-9]+$");
    if (!regexp.test(userNumberStr)) {
      throw "1에서 9까지의 자연수를 입력해주세요";
    }
  }

  isValidNumberWithoutDuplicate(userNumberStr) {
    let isValid = false;
    const wordLengthWidhoutDuplicate = new Set([...userNumberStr]).size;

    [...userNumberStr].map((i) => {
      i === "" || i === " " ? (isValid = true) : (isValid = false);
    });

    if (wordLengthWidhoutDuplicate !== 3 || isValid) {
      throw "서로 다른 3개의 숫자를 입력해주세요";
    }
  }
}
module.exports = Valid;
