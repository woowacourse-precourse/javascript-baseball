const MissionUtils = require('@woowacourse/mission-utils');
const exceptionHandlers = require('./exceptionHandlers');
const is3Strike = require('./is3Strike');

const main = () => {
  getNumber(makeRandomNumber());
};

const makeRandomNumber = () => {
  const arr = [];

  while (arr.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
  return arr;
};

const getNumber = (randomNumberArr) => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (num) => {
    if (wrongNumber(num)) {
      exceptionHandlers.errorGetNumber();
    }
    if (is3Strike(num, randomNumberArr.join(''))) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      guessedCorrectly();
    } else {
      getNumber(randomNumberArr);
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
  MissionUtils.Console.readLine(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    (num) => {
      exitOrRestart(num);
    }
  );
};

const exitOrRestart = (num) => {
  if (num === '1') {
    main();
  }
  if (num === '2') {
    exit();
  }
  if (num !== '1' && num !== '2') {
    exceptionHandlers.errorExitOrRestart();
    guessedCorrectly();
  }
};

const exit = () => {
  MissionUtils.Console.close();
};

module.exports = main;
