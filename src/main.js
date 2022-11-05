const MissionUtils = require('@woowacourse/mission-utils');
const exceptionHandling = require('./exceptionHandling');
const game = require('./game');
const guessedCorrectly = require('./exitOrRestart');

const main = () => {
  const computerNumsArr = makeRandomNums();
  console.log(computerNumsArr);
  receiveNumber(computerNumsArr);
};

const makeRandomNums = () => {
  const arr = [];

  while (arr.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
  return arr;
};

const receiveNumber = (computerNumsArr) => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (num) => {
    if (wrongNumber(num)) {
      return exceptionHandling();
    }
    if (game(num, computerNumsArr.join(''))) {
      return guessedCorrectly();
    } else {
      receiveNumber(computerNumsArr);
    }
  });
};

const wrongNumber = (num) => {
  if (
    isNaN(Number(num)) ||
    num <= 0 ||
    String(num).length !== 3 ||
    String(num).includes('0')
  ) {
    return true;
  }
  return false;
};

module.exports = main;
