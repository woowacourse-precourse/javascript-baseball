const MissionUtils = require('@woowacourse/mission-utils');
const exceptionHandling = require('./exceptionHandling');
const game = require('./game');

const main = () => {
  receiveNumber(makeRandomNums());
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
      exceptionHandling();
    }
    if (game(num, computerNumsArr.join(''))) {
      guessedCorrectly();
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

const guessedCorrectly = () => {
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  MissionUtils.Console.readLine(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    (num) => {
      exitOrRestart(num);
    }
  );
  return true;
};

const exitOrRestart = (num) => {
  if (num === '1') {
    receiveNumber(makeRandomNums());
  }
  if (num === '2') exit();
};

const exit = () => {
  MissionUtils.Console.close();
};

module.exports = main;
