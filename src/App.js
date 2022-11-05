const MissionUtils = require('@woowacourse/mission-utils');
class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.result = {
      ball: 0,
      strike: 0,
    };
    this.computerNumber = this.getComputerNumber();
    this.getInputNumber();
  }
  //컴퓨터의 랜덤 숫자 3개를 리턴하는 함수
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
  //사용자의 숫자를 받는 함수
  getInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputNumber) => {
      this.checkInputNumber(inputNumber);
    });
  }
  //입력한 숫자의 자릿수가 세 자리 인지 확인하는 함수
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
  //입력한 숫자가 올바른 숫자인지 확인하는 함수
  checkInputNumber(input) {
    this.isInputNumber(input);
    this.isInputLengthRight(input);
    this.isInputIncludeZero(input);
    this.isInputDifferentNumber(input);
    this.getResult(input);
  }
  //볼, 스트라이크 갯수 카운트하는 함수
  getResult(input) {
    for (let i = 0; i < 3; i++) {
      if (parseInt(input[i]) === this.computerNumber[i]) {
        this.result.strike += 1;
      } else if (this.computerNumber.includes(parseInt(input[i]))) {
        this.result.ball += 1;
      }
    }
    this.checkResult();
  }
  //결과 출력 함수
  checkResult() {
    let result = '';
    if (this.result.ball) {
      result += this.result.ball + '볼 ';
    }
    if (this.result.strike) {
      result += this.result.strike + '스트라이크 ';
    }
    if (result) {
      MissionUtils.Console.print(result);
    } else {
      MissionUtils.Console.print('낫싱');
    }
    if (this.result.strike !== 3) {
      this.result.strike = 0;
      this.result.ball = 0;
      this.getInputNumber();
    } else {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
  }
}

let app = new App();
app.play();

module.exports = App;
