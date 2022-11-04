const MissionUtils = require('@woowacourse/mission-utils');
const Constants = require('./constant');

class App {
  async play() {
    printGameStartMsg();
    const computerNumber = createComputerNumber();
    const userNumber = await inputNumber();
    userNumberException(userNumber);
    if (isAnswer()) {
      // 정답인 경우
    } else {
      // 정답이 아닌 경우
    }
  }
}

function printGameStartMsg() {
  MissionUtils.Console.print(Constants.START_MESSAGE);
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

function input(msg) {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine(msg, resolve);
  });
}

async function inputNumber() {
  const number = await input(Constants.INPUT_NUMBER_MESSAGE);
  return [...number];
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

function isAnswer(computerNumber, userNumber) {
  return computerNumber.join('') === userNumber.join('');
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

module.exports = App;
