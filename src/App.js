const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
  }

  getRandomNumbers() {
    this.computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  checkInputError(numbers) {
    const newNumbers = new Set(numbers); // 중복된 숫자를 찾기위해 사용
    if (isNaN(numbers)) {
      throw '숫자 이외의 입력';
    }

    if (numbers.length !== 3) {
      throw '3자리 숫자 이외의 입력';
    }

    if (newNumbers.size !== 3) {
      throw '중복된 숫자 입력';
    }
  }

  setUserNumber(numbers) {
    while (numbers !== 0) {
      this.userNumbers.push(numbers % 10);
      numbers = parseInt(numbers / 10);
    }

    this.userNumbers.reverse();
  }

  discriminationStrikeOrBall() {
    Console.print(this.computerNumbers);
    const result = this.userNumbers.reduce((acc, cur, i) => {
      if (this.computerNumbers.includes(cur)) {
        if (this.computerNumbers[i] === cur) return acc + 100;
        else return acc + 10;
      }

      return acc + 1;
    }, 0);

    Console.print(result);
  }

  userInputNumber() {
    try {
      Console.readLine('숫자를 입력해주세요 : ', (numbers) => {
        this.checkInputError(numbers);
        this.setUserNumber(numbers);
        return this.discriminationStrikeOrBall();
      });
    } catch (e) {
      console.error(e);
    }
  }

  gameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.getRandomNumbers();
    this.userInputNumber();
  }

  play() {
    this.gameStart();
  }
}

const baseball = new App();
baseball.play();

module.exports = App;
