const MISSION_UTILS = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.randomValue = '';
    this.userValue = '';
  };

  play() {
    makeRandomValue();
    makeUserValue();
  };

  setRandomValue(randomValue) {
    this.randomValue = randomValue;
    // MISSION_UTILS.Console.print(this.randomValue);
  };

  setUserValueAndCountStart(userValue) {
    this.userValue = userValue;
    isAnswer(countBallAndStrike(this.randomValue, this.userValue));
  };
  
};

const app = new App();
app.play();

function makeRandomValue() {
  let randomValue=new Set();

  while (randomValue.size < 3) {
    randomValue.add(MISSION_UTILS.Random.pickNumberInRange(1, 9));
  };

  app.setRandomValue([...randomValue].join(''));
};

function makeUserValue() {
  MISSION_UTILS.Console.readLine('숫자를 입력해주세요 : ', (userValue)=> {
    isValidUserInput(userValue);
  });
};

function isValidUserInput(userValue) {
  const IS_UNIQUE = (new Set(userValue)).size;

  if (!userValue.match(/[1-9]{3}/) || IS_UNIQUE !== 3) {
    throw '잘못된 형식을 입력하였습니다. 서로 다른 숫자 3가지를 입력하세요';
  };
  app.setUserValueAndCountStart(userValue)
};

function countBallAndStrike(randomValue, userValue) {
  const STRIKE = countStrike(randomValue, userValue);
  const BALL = countBall(randomValue, userValue) - STRIKE;

  if (STRIKE === 3) {
    return (`3스트라이크`);
  };

  if (BALL === 0 && STRIKE === 0) {
    return (`낫싱`);
  };

  if (BALL === 0 && STRIKE !== 0) {
    return (`${STRIKE}스트라이크`);
  };

  if (BALL !== 0 && STRIKE === 0) {
    return (`${BALL}볼`);
  };

  if (BALL !== 0 && STRIKE !== 0) {
    return (`${BALL}볼 ${STRIKE}스트라이크`);
  };

};

function countBall(randomValue, userValue) {
  return [...randomValue].filter(x => userValue.includes(x)).length;
};

function countStrike(randomValue, userValue) {
  return [...randomValue].filter((x, idx) => userValue[idx] === x).length;
};

function isAnswer(numberOfBallAndStrike) {
  MISSION_UTILS.Console.print(numberOfBallAndStrike);

  if (numberOfBallAndStrike === `3스트라이크`) {
    askRegameOrNot();
  };

  if (numberOfBallAndStrike !== `3스트라이크`) {
    makeUserValue();
  };

};

function askRegameOrNot() {
  MISSION_UTILS.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ', (regameRequest) => {
    checkRegameRequest(regameRequest);
  });
};

function checkRegameRequest(regameRequest) {

  if (regameRequest !== '1' && regameRequest !== '2') {
    throw '잘못된 형식을 입력하였습니다. 게임을 종료합니다.';
  };

  if (regameRequest === '1') {
    const app = new App();
    app.play();
  };

  if (regameRequest === '2') {
    MISSION_UTILS.Console.print(`게임 종료`);
    MISSION_UTILS.Console.close();
  };

};

module.exports = App;
