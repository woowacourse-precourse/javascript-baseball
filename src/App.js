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
    MISSION_UTILS.Console.print(this.randomValue);
  };

  setUserValueAndCountStart(userValue) {
    this.userValue = userValue;
    isAnswer(countBallAndStrike(this.randomValue, this.userValue));
  };
  
};

const app = new App();
app.play();

// 랜덤값 생성 함수
function makeRandomValue() {
  let randomValue=new Set();

  while (randomValue.size < 3) {
    randomValue.add(MISSION_UTILS.Random.pickNumberInRange(1, 9));
  };

  app.setRandomValue([...randomValue].join(''));
};

// 사용자의 숫자 입력받기
function makeUserValue() {
  MISSION_UTILS.Console.readLine('숫자를 입력해주세요 : ', (userValue)=> {
    isValidUserInput(userValue);
  });
};

//사용자의 입력값이 유효값인지 검사
function isValidUserInput(userValue) {
  const IS_UNIQUE = (new Set(userValue)).size;

  if (!userValue.match(/[1-9]{3}/) || IS_UNIQUE !== 3) {
    throw '잘못된 형식을 입력하였습니다. 서로 다른 숫자 3가지를 입력하세요';
  };
  app.setUserValueAndCountStart(userValue)
  // app.setUserValue(userValue);
  // app.checkcheck();
};

// 정답 검사
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

//볼 개수
function countBall(randomValue, userValue) {
  return [...randomValue].filter(x => userValue.includes(x)).length;
};

//스트라이크 개수
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
  MISSION_UTILS.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ', (answer) => {
    checkRegameRequest(answer);
  });
};

function checkRegameRequest(num) {

  if (num !== '1' && num !== '2') {
    throw '잘못된 형식을 입력하였습니다. 게임을 종료합니다.';
  };

  if (num === '1') {
    const app = new App();
    app.play();
  };

  if (num === '2') {
    MISSION_UTILS.Console.print(`게임 종료`);
    MISSION_UTILS.Console.close();
  };

};

module.exports = App;
