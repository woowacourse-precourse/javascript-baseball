const MissionUtils = require('@woowacourse/mission-utils');

class App {
  getRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('');
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.getRandomNumbers();

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) =>
      console.log(answer)
    );
  }
}

const app = new App();
app.play();

module.exports = App;
