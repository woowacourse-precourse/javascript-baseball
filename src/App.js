const MissionUtils = require("@woowacourse/mission-utils");

function generateRandomDigit() {
  return MissionUtils.Random.pickNumberInRange(1, 9);
}

function isExist(gameNumber, digit) {
  if (gameNumber.includes(digit)) return true;
  return false;
}

function addUniqueRandomDigit(gameNumber, digit) {
  if (isExist(gameNumber, digit)) return;
  gameNumber.push(digit);
}

function throwGuessException(userInput) {
  if (userInput.length !== 3) throw "3자리를 입력해주세요";
  if (isNaN(Number(userInput))) throw "숫자형식을 입력해주세요";
  if (userInput.includes("0")) throw "0은 포함되지 않습니다";
}

class App {
  setGameNumber() {
    let gameNumber = [];
    while (gameNumber.length < 3) {
      const digit = generateRandomDigit();
      addUniqueRandomDigit(gameNumber, digit);
    }
    return gameNumber;
  }

  play() {}
}

module.exports = {
  generateRandomDigit,
  isExist,
  addUniqueRandomDigit,
  App,
  throwGuessException,
};
