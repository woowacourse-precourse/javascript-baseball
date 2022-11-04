const MissionUtils = require('@woowacourse/mission-utils');

const checkResult = (computer, user) => {
  let count = 0;
  const test = user.split('').map((a) => Number(a));
  for (let i = 0; i < 3; i++) {
    if (computer[i] !== test[i]) break;
    count += 1;
  }
  if (count === 3) {
    MissionUtils.Console.close();
  } else {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (user) => checkResult(computer, user));
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
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (user) => checkResult(computer, user));
  }
}

const app = new App();
app.play();

module.exports = App;
