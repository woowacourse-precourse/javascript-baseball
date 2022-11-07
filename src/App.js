const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.gameStart();
  }

  gameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    MissionUtils.Console.close();
    console.log(computer);
  }
}

const app = new App();
app.play();

module.exports = App;
