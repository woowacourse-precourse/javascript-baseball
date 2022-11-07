const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.randomNums = this.makeRandomNums();
  }

  makeRandomNums() {
    const randomNums = [];
    while (randomNums.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNums.includes(num)) randomNums.push(num);
    }
    return randomNums;
  }
}

const app = new App();
app.play();
// module.exports = App;
