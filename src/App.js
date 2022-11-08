const { Console, Random } = require('@woowacourse/mission-utils');

const MSG = {
  initMsg: '숫자 야구 게임을 시작합니다.',
  inputNumber: '숫자를 입력해주세요 : ',
  endMsg: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  requestMsg: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  invalidInput: '잘못된 값을 입력하셨습니다',
  allCorrect: '3스트라이크',
  strike: '스트라이크',
  ball: '볼',
  nothing: '낫싱',
};

const HINT = {
  ball: '볼',
  strike: '스트라이크',
};

class App {
  play() {}
  play() {
    Console.print(MSG.initMsg);
    this.startGame();
  }

  startGame() {
    this.randomNumber = this.makeRandomNumber(3);
    this.setInputNumber();
  }

  makeRandomNumber(size) {
    const computer = [];

    while (computer.length < size) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }
    return computer.join('');
  }

  setInputNumber() {
    Console.readLine(MSG.inputNumber, (input) => {
      this.evaluate(input);
    });
  }

  isValid(inputNumber) {
    const re = /^[1-9]{3}/;
    const number = [...new Set(inputNumber)];
    if (!re.test(inputNumber) || number.length !== 3) {
      return false;
    }
    return true;
  }

  evaluate(number) {
    if (!this.isValid(number)) {
      throw Error(MSG.invalidInput);
    }
    const hintMsg = this.compare(number);
    Console.print(hintMsg);

    if (hintMsg === MSG.allCorrect) {
      return this.endGame();
    }
    return this.setInputNumber();
  }

  compare(number) {
    const count = {
      strike: 0,
      ball: 0,
    };
    let hintMsg = [];

    for (let i = 0; i < 3; i += 1) {
      if (this.isStrike(number[i], this.randomNumber[i])) count.strike += 1;
      else if (this.isBall(number[i], this.randomNumber[i])) count.ball += 1;
    }

    Object.entries(HINT).forEach(([key, value]) => {
      hintMsg.push(this.getHint(count[key], value));
    });

    hintMsg = hintMsg.join(' ').trim();

    return hintMsg !== '' ? hintMsg : MSG.nothing;
  }

  isStrike(inputNumber, randomNumber) {
    return inputNumber === randomNumber;
  }

  isBall(inputNumber, randomNumber) {
    return (
      inputNumber !== randomNumber && this.randomNumber.includes(inputNumber)
    );
  }

  getHint(number, msg) {
    if (number === 0) return '';

    return `${number}${msg}`;
  }

  endGame() {
    Console.print(MSG.endMsg);

    Console.readLine(MSG.requestMsg, (input) => {
      if (input === '1') {
        return this.play();
      }
      if (input === '2') {
        return Console.close();
      }
      throw Error(MSG.invalidInput);
    });
  }
}

const test = new App();
test.play();
module.exports = App;
