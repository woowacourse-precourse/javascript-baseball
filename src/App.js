const { Console, Random } = require('@woowacourse/mission-utils');

const MSG = {
  initMsg: '숫자 야구 게임을 시작합니다.',
  inputNumber: '숫자를 입력해주세요 : ',
  endMsg: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  requestMsg: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요',
  invalidInput: '잘못된 값을 입력하셨습니다',
  strike: '스트라이크',
  ball: '볼',
  nothing: '낫싱',
};

class App {
  #randomNumber;
  #inputNumber;

  play() {
    Console.print(MSG.initMsg);
    this.startGame();
  }

  startGame() {
    this.#randomNumber = this.makeRandomNumber();
    this.#inputNumber = this.setInputNumber();
  }

  makeRandomNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }
    return computer.join('');
  }

  setInputNumber() {
    Console.readLine(MSG.inputNumber, (input) => {
      // this.checkNumber(input);
    });
  }

  isValid(inputNumber) {
    const re = /^[1-9]{3}/;
    const number = [...new Set(inputNumber)];
    if (!re.test(inputNumber) || number.length !== 3) {
      throw Error(MSG.invalidInput);
    }
    return inputNumber;
  }

  checkNumber(number) {
    for (let i = 0; i < 3; i++) {}
  }
}

const etst = new App();

etst.play();
console.log('안녕하세요!');
module.exports = App;
