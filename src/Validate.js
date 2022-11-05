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

  const userInputArr = GameUtils.userInputToNumberArr(userInput);
  userInputArr.forEach((number, idx) => {
    if (number < 1) throw new Error("숫자는 1 이상 9이하 여야 합니다.");
    if (!regExp.test(userInput)) throw new Error("숫자만 입력해야 합니다");
  });

  if (userInputArr.length !== [...new Set(userInputArr)].length) {
    throw new Error("중복된 값은 입력할 수 없습니다");
  }
};

module.exports = Validate;
