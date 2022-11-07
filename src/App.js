const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computer = [];
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }

  startGame() {
    this.setRandomNumbers();
    this.guessNumbers();
  }

  setRandomNumbers() {
    const numbers = [];

    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    this.computer = numbers;
  }

  guessNumbers() {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const userNumbers = this.separateNumbers(answer);
      const memo = this.mark(this.computer, userNumbers);
      this.printResultMessage(memo);

      memo.strike !== 3 ? this.guessNumbers() : this.replay();
    });
  }

  replay() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        if (answer !== '1' && answer !== '2') {
          throw new Error('replay/invalid-user-input');
        }

        answer === '1' ? this.startGame() : Console.close();
      }
    );
  }

  separateNumbers(str) {
    if (str.length !== 3) {
      throw new Error('separateNumbers/invalid-length');
    }

    if (!Number.isInteger(Number(str))) {
      throw new Error('separateNumbers/invalid-user-input');
    }

    return [...str].map((digit) => Number(digit));
  }

  mark(computer, user) {
    const memo = { ball: 0, strike: 0 };

    user.forEach((userNumber, index) => {
      if (userNumber === computer[index]) {
        memo.strike += 1;
      } else if (computer.includes(userNumber)) {
        memo.ball += 1;
      }
    });

    return memo;
  }

  printResultMessage({ ball, strike }) {
    let resultMessage = '';

    if (ball !== 0) {
      resultMessage += `${ball}볼`;
    }

    if (strike !== 0) {
      resultMessage += ` ${strike}스트라이크`;
    }

    if (ball === 0 && strike === 0) {
      resultMessage = '낫싱';
    }

    Console.print(resultMessage.trim());

    if (strike === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
  }
}

module.exports = App;
