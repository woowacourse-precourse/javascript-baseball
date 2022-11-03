/* eslint-disable class-methods-use-this */
const MissionUtils = require('@woowacourse/mission-utils');

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.userInput = '';
    this.randomNumber = '';
    this.gameResults = {};
    this.compare = {
      isStrike(num, idx) {
        return this.randomNumber[idx] === num;
      },

      isBall(num, idx) {
        return (
          this.randomNumber[idx] !== num && this.randomNumber.includes(num)
        );
      },
    };
  }

  print(message) {
    Console.print(message);
  }

  printStartNotification() {
    this.print('숫자 야구 게임을 시작합니다.');
  }

  generateRandomNumber() {
    this.randomNumber = '';

    while (this.randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.randomNumber.includes(number)) this.randomNumber += `${number}`;
    }
    this.randomNumber = [...this.randomNumber];
  }

  getUserInput() {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const { getResult, gameResult, printResult, restart } = this;
      this.userInput = [...answer];

      getResult();
      printResult(gameResult);
      restart();
    });
  }

  getResult() {
    const { compare, gameResults } = this;

    this.userInput.forEach((num, idx) => {
      if (compare.isStrike(num, idx)) {
        gameResults.strike = gameResults.strike + 1 || 1;
      }
      if (compare.isBall(num, idx)) {
        gameResults.ball = gameResults.ball + 1 || 1;
      }
    });
  }

  printResult(gameResult) {
    const { strike, ball } = gameResult;
    const { print } = this;

    const strikeMessage = `${strike ? strike + '스트라이크 ' : ''}`;
    const ballMessage = `${ball ? ball + '볼 ' : ''}`;
    const nothingMessage = `${!strike && !ball ? '낫싱' : ''}`;

    print(strikeMessage + ballMessage + nothingMessage);
    if (strike === 3) print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  restart() {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      if (answer === 1) this.start();
      if (answer === 2) return;
    });
  }

  start() {
    this.generateRandomNumber();
    this.getUserInput();
  }

  play() {
    this.printStartNotification();
    this.start();
  }
}

const app = new App();
app.play();

module.exports = App;
