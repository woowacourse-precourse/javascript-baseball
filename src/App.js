const MissionUtils = require('@woowacourse/mission-utils');
class App {
  playBall() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computer = this.randomNum();
  }

  randomNum() {
    let randomNum = [];
    while (randomNum.length != 3) {
      let pickNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(pickNum)) {
        randomNum.push(pickNum);
      }
    }
    return randomNum;
  }
  play() {
    this.playBall();
  }
}

module.exports = App;
