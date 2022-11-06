const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.createUniqueNumbers(1, 9, 3);
    this.guess(computer);
  }

  createUniqueNumbers(start, end, count) {
    const numberSet = new Set();

    while (numberSet.size !== count) {
      const number = Random.pickNumberInRange(start, end);
      if (!numberSet.has(number)) numberSet.add(number);
    }

    return [...numberSet];
  }

  guess(computer) {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      if (!this.validateUserGuess(input)) {
        throw new Error('1부터 9까지 서로 다른 3자리 숫자를 입력해주세요.');
      }

      const player = Array.from(input, Number);
      const result = this.getResult(computer, player);
      Console.print(result);

      if (result !== '3스트라이크') {
        this.guess(computer);
      } else {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.askPlayAgain();
      }
    });
  }

  validateUserGuess(input) {
    if (input.length !== 3) return false;

    const inputNumbers = Array.from(input, Number);
    if (inputNumbers.some((number) => !Number.isInteger(number))) return false;
    if (inputNumbers.some((number) => number === 0)) return false;

    const inputNumberSet = new Set(inputNumbers);
    if (inputNumberSet.size !== 3) return false;

    return true;
  }

  countExist(computer, player) {
    const computerSet = new Set(computer);
    const exists = player.filter((guess) => computerSet.has(guess));
    return exists.length;
  }

  countStrike(computer, player) {
    const strikes = player.filter((guess, i) => guess === computer[i]);
    return strikes.length;
  }

  getResult(computer, player) {
    const exist = this.countExist(computer, player);
    const strike = this.countStrike(computer, player);
    const ball = exist - strike;

    if (exist === 0) {
      return '낫싱';
    } else if (strike === 0) {
      return `${ball}볼`;
    } else if (ball === 0) {
      return strike + '스트라이크';
    }

    return `${ball}볼 ${strike}스트라이크`;
  }

  askPlayAgain() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    Console.readLine('', (input) => {
      switch (input) {
        case '1':
          return this.play();
        case '2':
          return Console.close();
        default:
          throw new Error('게임을 종료합니다.');
      }
    });
  }
}

module.exports = App;
