const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    const answer = makeComputerAnswer();
    console.log('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (message) =>
      console.log(message)
    );
  }
}

function makeComputerAnswer() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

module.exports = App;

const app = new App();
app.play();
