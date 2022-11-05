const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const answer = this.makeComputerAnswer();
    this.playBaseball(answer);
  }

  makeComputerAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  playBaseball(answer) {
    let result = [];
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      for (let i = 0; i < 3; i++) {
        result.push(number[i]);
      }
      console.log(result);
    });
  }

  checkBall(message, answer) {
    const result = message.filter((message) => answer.inclueds(answer));
    return result;
  }
}

module.exports = App;

const app = new App();
app.play();
