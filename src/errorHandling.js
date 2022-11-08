const { Console } = require("@woowacourse/mission-utils");

const checkOverlapNumbers = (userInput) => {
  const obj = {};

  userInput.forEach((v) => {
    obj[v] = (obj[v] || 0) + 1;
  });

  const checkError = Object.values(obj).filter((v) => v >= 2).length;

  return checkError;
};

const checkOnlyNumbers = (userInput) => userInput.every((v) => v || v === 0);
const checkNumbersLength = (userInput) => userInput.length !== 3;
const checkZeroNumber = (userInput) => userInput.some((v) => v === 0);

function validateNumbers(userInput) {
  if (checkOverlapNumbers(userInput)) {
    Console.print("중복되는 숫자를 입력하셨습니다. 게임을 다시 시작해주세요.");
    throw Error("Overlap Number");
  }

  if (!checkOnlyNumbers(userInput)) {
    Console.print("숫자가 아닌 값을 입력하셨습니다. 게임을 다시 시작해주세요.");
    throw Error("Not Number");
  }

  if (checkZeroNumber(userInput)) {
    Console.print("0을 입력하셨습니다. 게임을 다시 시작해주세요.");
    throw Error("Zero Number");
  }

  if (checkNumbersLength(userInput)) {
    Console.print("3개의 숫자만 입력해주세요. 게임을 다시 시작해주세요.");
    throw Error("Over Length");
  }
}

function validResetInput() {
  Console.print("유효하지 않은 입력값입니다. 게임을 종료합니다.");
  throw Error("Only 1 or 2");
}

module.exports = {
  validateNumbers,
  validResetInput,
};
