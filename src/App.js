const MissionUtils = require('@woowacourse/mission-utils');

const gameSetting = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const gameStart = (computer) => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumber) => checkResult(computer, userNumber));
};

const gameRestart = (answer) => {
  if (answer === '1') {
    const computerNumber = gameSetting();
    gameStart(computerNumber);
    return;
  }
  if (answer === '2') {
    MissionUtils.Console.close();
    return;
  }
  throw new Error('올바른 입력이 아닙니다.');
};

const getStrike = (computer, user) => {
  let strike = 0;
  for (let i = 0; i < 3; i++) {
    if (computer[i] === user[i]) {
      strike += 1;
    }
  }
  return strike;
};

const getBall = (computer, user) => {
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (computer.includes(user[i]) && computer[i] !== user[i]) {
      ball += 1;
    }
  }
  return ball;
};

const checkResult = (computer, userNumber) => {
  const user = userNumber.split('').map((num) => Number(num)).filter((num) => num > 0);
  const strike = getStrike(computer, user);
  const ball = getBall(computer, user);

  if (user.length !== 3) {
    throw new Error('올바르지 않은 입력입니다.');
  }

  if (strike === 3) {
    MissionUtils.Console.print(`${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (
      answer,
    ) => gameRestart(answer));
  } else if (strike === 0 && ball === 0) {
    MissionUtils.Console.print('낫싱');
    gameStart(computer);
  } else if (strike === 0 && ball > 0) {
    MissionUtils.Console.print(`${ball}볼`);
    gameStart(computer);
  } else if (strike > 0 && ball === 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    gameStart(computer);
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    gameStart(computer);
  }
};

class App {
  play() {
    const computerNumber = gameSetting();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    gameStart(computerNumber);
  }
}

const app = new App();
app.play();

module.exports = App;
