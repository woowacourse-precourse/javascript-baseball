const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }

  startGame() {
    this.inputComputerAnswer();
    this.inputUserAnswer();
  }

  inputComputerAnswer() {
    const computerAnswerArr = [];
    while (computerAnswerArr.length < 3) {
      const pickNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerAnswerArr.includes(pickNumber)) {
        computerAnswerArr.push(pickNumber);
      }
    }
    this.computerAnswerArr = computerAnswerArr;
  }
}

module.exports = App;
