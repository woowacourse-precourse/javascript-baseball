const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
  }

  play() {
    this.gameStart();
  }

  gameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
    return this.getRandomNumbers();
  }

  getRandomNumbers() {
    this.computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
    return this.userInputNumber();
  }

  userInputNumber() {
    Console.readLine('숫자를 입력해주세요 : ', (numbers) => {
      return this.checkInputError(numbers);
    });
  }

  checkInputError(numbers) {
    const newNumbers = new Set(numbers); // 중복된 숫자를 찾기위해 사용
    if (isNaN(numbers)) {
      throw new Error('숫자 이외의 입력');
    }

    if (numbers.length !== 3) {
      throw new Error();
    }

    if (newNumbers.size !== 3) {
      throw new Error();
    }

    return this.setUserNumber(numbers);
  }

  setUserNumber(numbers) {
    this.userNumbers = [];
    while (numbers !== 0) {
      this.userNumbers.push(numbers % 10);
      numbers = parseInt(numbers / 10);
    }

    this.userNumbers.reverse();
    return this.discriminationStrikeOrBall();
  }

  discriminationStrikeOrBall() {
    const result = this.userNumbers.reduce((acc, cur, i) => {
      if (this.computerNumbers.includes(cur)) {
        if (this.computerNumbers[i] === cur) return acc + 10;
        else return acc + 100;
      }

      return acc + 1;
    }, 0);

    const isGameSet = this.calculateGameResult(result);
    if (isGameSet) return this.gameSet();

    return this.userInputNumber();
  }

  calculateGameResult(result) {
    const gameResult = [];
    for (let i = 100; i !== 0; i = parseInt(i / 10)) {
      gameResult.push(parseInt(result / i));
      result %= i;
    }

    this.printGameResult(gameResult);
    return gameResult[1] === 3 ? true : false;
  }

  gameSet() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (num) => {
        if (num === '1') {
          return this.play();
        }

        if (num === '2') {
          Console.close();
        } else throw new Error('잘못된 숫자 입력');
      },
    );
  }

  printGameResult(gameResult) {
    if (gameResult[2] === 3) {
      Console.print('낫싱');
      return;
    }

    let text = '';

    for (let i = 0; i < 2; i++) {
      if (gameResult[i] === 0) continue;

      text += gameResult[i];
      switch (i) {
        case 0:
          text += '볼 ';
          break;
        case 1:
          text += '스트라이크';
      }
    }

    Console.print(text);
  }
}

const baseball = new App();
baseball.play();

module.exports = App;
