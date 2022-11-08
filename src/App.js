const MissionUtils = require('@woowacourse/mission-utils');

class App {
  initGame() {
    this.userInputNumber = [];
    this.computerRandomNumber = [];
    this.strikeScore = 0;
    this.ballScore = 0;
    this.compareResultText = '';
  }

  generateRandomNumber() {
    const newRandomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.computerRandomNumber = [...newRandomNumber];
  }

  startGame() {
    this.initGame();
    this.generateRandomNumber();
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }
}

module.exports = App;
