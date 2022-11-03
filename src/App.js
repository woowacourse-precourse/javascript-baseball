// this 문제 destructuring & arrow func, readline async 문제, 삼항연산자 && 가독성, jest
const MissionUtils = require('@woowacourse/mission-utils');

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.userInput = '';
    this.randomNumber = '';
    this.gameResults = {};
    this.compare = {
      isStrike: (num, idx) => this.randomNumber[idx] === num,

      isBall: (num, idx) => this.randomNumber[idx] !== num && this.randomNumber.includes(num),
    };
  }

  print(message) {
    Console.print(message);
  }

  printStartNotification() {
    this.print('숫자 야구 게임을 시작합니다.');
  }

  generateRandomNumber() {
    while (this.randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.randomNumber.includes(number)) this.randomNumber += `${number}`;
    }
    this.randomNumber = [...this.randomNumber];
  }

  getUserInput() {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      if (answer.length !== 3 || !Number.isInteger(+answer) || Math.sign(answer) === -1) throw new Error('잘못된 값을 입력하셨습니다.');
      this.userInput = [...answer];
      this.gameResults = {};

      this.getResult();
      this.printResult();
      this.restart();
    });
  }

  getResult() {
    const { gameResults } = this;
    const { isStrike, isBall } = this.compare;

    this.userInput.forEach((num, idx) => {
      if (isStrike(num, idx)) gameResults.strike = gameResults.strike + 1 || 1;
      if (isBall(num, idx)) gameResults.ball = gameResults.ball + 1 || 1;
    });
  }

  printResult() {
    const { strike, ball } = this.gameResults;
    const { print } = this;

    const ballMessage = `${ball ? `${ball}볼 ` : ''}`;
    const strikeMessage = `${strike ? `${strike}스트라이크 ` : ''}`;
    const nothingMessage = `${!strike && !ball ? '낫싱' : ''}`;

    print(ballMessage + strikeMessage + nothingMessage);
    if (strike === 3) print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    else this.getUserInput();
  }

  restart() {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => {
      if (answer === '1') {
        this.randomNumber = '';
        this.start();
        return;
      }
      if (answer === '2') {
        this.print('게임 종료');
        return;
      };
      throw new Error('잘못된 값을 입력하셨습니다.');
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
