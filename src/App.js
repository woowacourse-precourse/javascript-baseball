const MissionUtils = require('@woowacourse/mission-utils');
class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computerNumber = this.getComputerNumber();
    this.getInputNumber();
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
      this.checkInputNumber(inputNumber);
    });
  }
  isInputLengthRight(input) {
    if (input.length !== 3) throw '세 자리를 입력하세요.';
  }
  //입력한 숫자가 모두 숫자인지 확인하는 함수
  isInputNumber(input) {
    if (isNaN(parseInt(input))) {
      throw '숫자를 입력하세요.';
    }
  }
  //입력한 숫자에 0이 포함되는지 확인하는 함수
  isInputIncludeZero(input) {
    for (let i = 0; i < input.length; i++) {
      if (parseInt(input[i]) === 0) {
        throw '0을 포함할 수 없습니다.';
      }
    }
  }
  //입력한 숫자가 모두 다른 숫자인지 확인하는 함수
  isInputDifferentNumber(input) {
    const check = new Set(input);
    if (check.size !== input.length) {
      throw '서로 다른 숫자를 입력하세요.';
    }
  }
  checkInputNumber(input) {
    this.isInputNumber(input);
    this.isInputLengthRight(input);
    this.isInputIncludeZero(input);
    this.isInputDifferentNumber(input);
  }
}

let app = new App();
app.play();

module.exports = App;
