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

function convertToNumberArray(userInput) {
  return userInput.split("").map((singleInput) => Number(singleInput));
}

function isNothing(gameNumber, guessNumber) {
  if (guessNumber.filter((digit) => gameNumber.includes(digit)).length == 0)
    return true;
  return false;
}

function findStrike(gameNumber, guessNumber) {
  let strikes = 0;
  guessNumber.forEach((digit) => {
    if (digit == gameNumber[guessNumber.indexOf(digit)]) strikes++;
  });
  return strikes;
}

function findBall(gameNumber, guessNumber) {
  let balls = 0;
  guessNumber.forEach((digit) => {
    if (
      digit !== gameNumber[guessNumber.indexOf(digit)] &&
      gameNumber.includes(digit)
    )
      balls++;
  });
  return balls;
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
  convertToNumberArray,
  isNothing,
  findStrike,
  findBall,
};
