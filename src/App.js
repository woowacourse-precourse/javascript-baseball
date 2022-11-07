const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this._randomNumber = undefined;
  }

  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.setRandomNumber();
    this.inputUserNumber();
  }

  setRandomNumber() {
    const threeNumberArray = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3,
    );
    const randomNumber = MissionUtils.Random.shuffle(threeNumberArray);
    this.randomNumber = randomNumber;
  }

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
