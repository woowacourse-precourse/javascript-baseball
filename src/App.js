/* eslint-disable class-methods-use-this */
const MissionUtils = require('@woowacourse/mission-utils');

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
        return this.randomNumber[idx] !== num && this.randomNumber.includes(num);
      },
    };
  }

  print(message) {
    MissionUtils.Console.print(message);
  }

  printStartNotification() {
    this.print('숫자 야구 게임을 시작합니다.');
  }

  generateRandomNumber() {
    const { randomNumber } = this;
    randomNumber = '';

    while (randomNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) randomNumber += `${number}`;
    }
    randomNumber = [...randomNumber];
  }

  getUserInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const { userInput, getResult, gameResult, print } = this;

      userInput = [...answer];
      getResult();
      if (!gameResult.strike && !gameResult.ball) print('낫싱');
      if (gameResult.strike && !gameResult.ball) print(`${gameResult.strike} 스트라이크`);
      
    });
  }

  getResult() {
    const { compare, gameResults } = this;

    this.userInput.forEach((num, idx) => {
      if (compare.isStrike(num, idx)) gameResults.strike = gameResults.strike + 1 || 1;
      if (compare.isBall(num, idx)) gameResults.ball = gameResults.ball + 1 || 1;
    });
  }

  get userInput() {
    return this.userInput;
  }

  play() {
    this.printStartNotification();
    this.generateRandomNumber();
    this.getUserInput();
  }
}

const app = new App();
app.play();

module.exports = App;
