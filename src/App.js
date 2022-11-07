const MissionUtils = require('@woowacourse/mission-utils');
const Constants = require('./constant');

class App {
  async play() {
    printMessage(Constants.START_MESSAGE);
    const computerNumber = createComputerNumber();
    const userNumber = await inputNumber(Constants.INPUT_NUMBER_MESSAGE);
    userNumberException(userNumber);
    const strike = countStrike(computerNumber, userNumber);
    const ball = countBall(computerNumber, userNumber);
    printResult(ball, strike);

    if (isAnswer(strike)) {
      printMessage(Constants.WIN_MESSAGE);
      const selectedNumber = Number(await inputNumber(Constants.END_MESSAGE));
      selectedNumberException(selectedNumber);
    }
  }
}

function printMessage(message) {
  MissionUtils.Console.print(message);
}

function createComputerNumber() {
  const computerNumber = [];

  while (computerNumber.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computerNumber.includes(randomNumber)) {
      computerNumber.push(randomNumber);
    }
  }

  return computerNumber;
}

function input(message) {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine(message, resolve);
  });
}

async function inputNumber(message) {
  const number = await input(message);

  return [...number].map((num) => Number(num));
}

function isNumber(userNumber) {
  for (let number of userNumber) {
    if (!(1 <= number && number <= 9)) {
      return false;
    }
  }

  return true;
}

function isLength3(userNumber) {
  return userNumber.length === 3;
}

function isDuplicated(userNumber) {
  const userNumberSet = new Set(userNumber);

  return userNumberSet.size === userNumber.length;
}

function userNumberException(userNumber) {
  if (
    !(isNumber(userNumber) && isLength3(userNumber) && isDuplicated(userNumber))
  ) {
    throw new Error('Invalid number..!');
  }
}

function isAnswer(strike) {
  return strike === 3;
}

function countStrike(computerNumber, userNumber) {
  let strike = 0;

  for (let i = 0; i < 3; i++) {
    if (computerNumber[i] === userNumber[i]) {
      strike++;
    }
  }

  return strike;
}

function countBall(computerNumber, userNumber) {
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (
      computerNumber.includes(userNumber[i]) &&
      computerNumber[i] !== userNumber[i]
    ) {
      ball++;
    }
  }

  return ball;
}

function printResult(ball, strike) {
  let result = ``;

  if (ball) result += `${ball}볼`;

  if (strike) result += ` ${strike}스트라이크`;

  if (result === ``) result += `낫싱`;

  MissionUtils.Console.print(result.trim());
}

function selectedNumberException(selectedNumber) {
  if (!(selectedNumber === 1 || selectedNumber === 2)) {
    throw new Error('Invalid number..!');
  }
}

async function getAnswer(computerNumber) {
  const userNumber = await inputNumber(Constants.INPUT_NUMBER_MESSAGE);
  userNumberException(userNumber);

  const strike = countStrike(computerNumber, userNumber);
  const ball = countBall(computerNumber, userNumber);
  printResult(ball, strike);

  if (isAnswer(strike)) {
    printMessage(Constants.WIN_MESSAGE);
    const selectedNumber = Number(await inputNumber(Constants.END_MESSAGE));
    selectedNumberException(selectedNumber);

    if (selectedNumber === 1) {
      // 새로운 게임 시작
    }
  }
}

function startNewGame() {
  const computerNumber = createComputerNumber();
  getAnswer();
}

module.exports = App;
