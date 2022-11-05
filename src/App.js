const MissionUtils = require('@woowacourse/mission-utils');

class App {
  gameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getRandomNumbers();
    this.printAnswer();
  }

  getRandomNumbers() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  printAnswer() {
    MissionUtils.Console.print(this.answer[0]);
  }

  play() {
    this.gameStart();
  }
}

const baseball = new App();
baseball.play();

module.exports = App;
