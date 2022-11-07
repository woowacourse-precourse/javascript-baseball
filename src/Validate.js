const GameUtils = require("./utils/GameUtils");

class Validate {
  constructor() {}

  static userGuessNumbers(userInput) {
    validUserGuessNumber(userInput);
  }
  static userChoice(userInput) {
    validateUserChoice(userInput);
  }
}

const validUserGuessNumber = (userInput) => {
  const userInputArr = GameUtils.userInputToNumberArr(userInput);

  if (!isRightSize(userInputArr, 3)) {
    throw new Error("입력값은 반드시 3자리 여야 합니니다.");
  }
  if (userInputArr.includes(0)) {
    throw new Error("숫자는 1 이상 9이하 여야 합니다.");
  }
  if (!Number.isInteger(Number(userInput))) {
    throw new Error("숫자만 입력해야 합니다");
  }
  if (isDup(userInputArr)) {
    throw new Error("중복된 값은 입력할 수 없습니다");
  }
};

const validateUserChoice = (userInput) => {
  if (userInput !== "1" && userInput !== "2") {
    throw new Error("1 과 2 중에 숫자만 입력하세요");
  }
};

function isDup(arr) {
  return arr.length !== [...new Set(arr)].length;
}
function isRightSize(userInput, num) {
  return userInput.length === num;
}

module.exports = Validate;
