const MissionUtils = require('@woowacourse/mission-utils');

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
  const user = userNumber.split('').map((a) => Number(a));
  const strike = getStrike(computer, user);
  const ball = getBall(computer, user);

  if (strike === 3) {
    MissionUtils.Console.print(`${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    MissionUtils.Console.close();
  } else if (strike === 0 && ball === 0) {
    MissionUtils.Console.print('낫싱');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumber) => checkResult(computer, userNumber));
  } else if (strike === 0 && ball > 0) {
    MissionUtils.Console.print(`${ball}볼`);
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumber) => checkResult(computer, userNumber));
  } else if (strike > 0 && ball === 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumber) => checkResult(computer, userNumber));
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumber) => checkResult(computer, userNumber));
  }
};

class App {
  play() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumber) => checkResult(computer, userNumber));
  }
}

const app = new App();
app.play();

module.exports = App;
