const { Console, Random } = require("@woowacourse/mission-utils");
const ONLY_NUMBER = /^[1-9]+$/;


class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.computer = [];
    this.input = [];
    this.computerRandomNumber();
    this.inputNumber();
  }

  computerRandomNumber() {
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  inputNumber() {
    Console.readLine('숫자를 입력하세요 : ', (input) => {
      this.input = input.split('').map((i) => Number(i));
      this.checkValidation(this.input);
    })
  }

  checkValidation (input) {
    if (input.length !== 3) {
      throw '세자리 숫자를 입력해 주세요.';
    }
    if (new Set(input).size !== 3) {
      throw '중복되지 않게 숫자를 입력해 주세요';
    }
    if (!ONLY_NUMBER.test(input.join(''))) {
      throw '숫자 외의 값을 입력하셨습니다.';
    }
  }


}

module.exports = App;
