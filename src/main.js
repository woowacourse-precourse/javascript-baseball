const MissionUtils = require('@woowacourse/mission-utils');
const exceptionHandling = require('./exceptionHandling');
const game = require('./game');

const main = () => {
  const computersPick = [];

  while (computersPick.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computersPick.includes(randomNumber)) {
      computersPick.push(randomNumber);
    }
  }

  receiveNumber();
};

const receiveNumber = () => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (num) => {
    if (wrongNumber(num)) {
      return exceptionHandling();
    }
    return game(num, computersPick.join(''));
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
