const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // step1
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    
    // step2
    let computer = this.setComputerNum();
    MissionUtils.Console.print(computer);

    // step3

    // step4

    // step5

    // step6

  }

  setComputerNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  countStrike() {

  }

  countBall() {

  }

  result() {

  }

  resultString() {

  }
}

const app = new App;
app.play();

module.exports = App;
