const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.setRandomNumber();
    this.inputUserNumber();
  }

  setRandomNumber() {}

  inputUserNumber() {}

  checkInputCorret() {}

  judgeInput() {}

  calcStrike() {}

  calcBall() {}

  endGame() {}
}

const app = new App();
app.play();

module.exports = App;
