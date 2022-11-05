const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.startGame();
    this.getComputerNumber();
  }

  startGame() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다');
  }

  getComputerNumber() {
    const computerNumbers = [];

    while (computerNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }
    return computerNumbers.join('');
  }
}

const app = new App();
app.play();
module.exports = App;
