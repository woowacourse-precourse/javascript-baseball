const MissionUtils = require('@woowacourse/mission-utils');
class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computerNumber = this.getComputerNumber();
    this.inputNumber = this.getInputNumber();
  }
  getComputerNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    return COMPUTER;
  }
  getInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputNumber) => {
      return inputNumber;
    });
  }
}

let app = new App();
app.play();

module.exports = App;
