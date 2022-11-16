// modules
const { Console } = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const User = require('./User');

class App {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }

  startGame() {
    this.computer.pickRandomBaseball();
    this.requestUserGuess();
  }

  requestUserGuess() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      const numbers = Array.from(input, Number);

      this.user.guess(numbers, this.computer);
      const result = this.user.tellResult();

      this.printResult(result);
    });
  }

  printResult(result) {
    Console.print(result);

    if (result !== '3스트라이크') {
      this.requestUserGuess();
    } else {
      this.requestPlayAgain();
    }
  }

  requestPlayAgain() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    Console.readLine('', (input) => {
      switch (input) {
        case '1':
          return this.startGame();
        case '2':
          return this.close();
        default:
          throw new InputError('게임을 종료합니다.');
      }
    });
  }

  close() {
    Console.close();
  }
}

module.exports = App;
