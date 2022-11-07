class ValidUserNumbers {
  static isThreeNumberInRange(userInput) {
    const NUMBER_IN_RANGE = /^[1-9]+$/;
    const ERROR_MESSAGE =
      "1부터 9까지 서로 다른 수로 이루어진 3자리 숫자를 입력해주세요.";
    const USER_NUMBERS = [];

    userInput
      .split("")
      .forEach((element) =>
        !USER_NUMBERS.includes(element) ? USER_NUMBERS.push(element) : ""
      );
    if (USER_NUMBERS.length !== 3) throw new Error(ERROR_MESSAGE);

    if (userInput.length !== 3 || !NUMBER_IN_RANGE.test(userInput)) {
      throw new Error(ERROR_MESSAGE);
    }
  }
}
module.exports = ValidUserNumbers;
