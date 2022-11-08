class ExceptionHandler {
  static validateInputLength(input) {
    if (input.length !== 3) {
      throw new Error("입력값의 길이가 3이어야 합니다.");
    }
  }

  static validateInputisNumber(input) {
    const regExp = /^[1-9]+$/;
    if (!regExp.test(input)) {
      throw new Error("입력값은 1~9 사이숫자여야합니다.");
    }
  }

  static validateInputisNotDuplicated(input) {
    const inputArray = input.split("");
    const inputSet = new Set(inputArray);
    if (inputArray.length !== inputSet.size) {
      throw new Error("입력이 잘못되었습니다.");
    }
  }
}

module.exports = ExceptionHandler;
