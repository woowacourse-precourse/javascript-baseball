const MissionUtils = require("@woowacourse/mission-utils");
class App {
  static answer;
  static hint;

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.answer = this.generateComputerNumber();
    this.startGame();
  }

  generateComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }
    return computerNumber;
  }

  startGame() {
    MissionUtils.Console.readline('숫자를 입력해주세요 : ', (inputNumber) => {
      this.throwError(inputNumber);
      MissionUtils.Console.print(this.hint);
      this.checkAnswer();
    })
  }

  throwError(inputNumber) {
    if (!this.checkInput(inputNumber)) throw new Error('잘못된 입력입니다.');
    this.hint = this.getHint(this.answer, inputNumber);
  }
}

module.exports = App;
