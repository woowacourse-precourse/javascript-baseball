const MissionUtils = require('@woowacourse/mission-utils');
const checkValidRandomNumber = require('./utils/checkValidRandomNumber');
const checkValidUserInput = require('./utils/checkValidUserInput');

class App {
  initGame() {
    this.userInputNumber = [];
    this.computerRandomNumber = [];
    this.strikeScore = 0;
    this.ballScore = 0;
    this.compareResultText = '';
  }

  generateRandomNumber() {
    do {
      const newRandomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
      this.computerRandomNumber = [...newRandomNumber];
    } while (!checkValidRandomNumber());
  }

  getUserInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      this.userInputNumber = [...String(userInput).split('').map((x) => +x)];
      if (checkValidUserInput(this.userInputNumber)) {
        this.calculateResult();
      }
    });
  }

  calculateResult() {
    this.strikeScore = 0;
    this.ballScore = 0;
    this.userInputNumber.forEach((digit, digitIndex) => {
      if (digit === this.computerRandomNumber[digitIndex]) {
        this.strikeScore += 1;
      } else if (this.computerRandomNumber.includes(digit)) {
        this.ballScore += 1;
      }
    });
  }

  startGame() {
    this.initGame();
    this.generateRandomNumber();
    this.getUserInput();
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }
}

module.exports = App;
