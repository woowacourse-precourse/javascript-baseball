const GameUtils = require("./GameUtils");

class Validate {
  constructor() {}

  static userGuessNumbers(userInput) {
    validUserGuessNumber(userInput);
  }
}

const validUserGuessNumber = (userInput) => {
  const regExp = /^[0-9]+$/;
  if (userInput.length !== 3) {
    throw new Error("입력값은 반드시 3자리 여야 합니니다.");
  }
  GameUtils.userInputToNumberArr(userInput).forEach((number) => {
    if (number < 1) throw new Error("숫자는 1 이상이어야 합니다.");
    if (number > 9) throw new Error("숫자는 9 이하여야 합니다");
    if (!regExp.test(userInput)) throw new Error("숫자만 입력해야 합니다");
  });
};

module.exports = Validate;
