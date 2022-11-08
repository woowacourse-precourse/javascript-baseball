const MissionUtils = require('@woowacourse/mission-utils');
const checkValidUserInput = require('./utils/checkValidUserInput');
const generateRandomNumber = require('./game/generateRandomNumber');

class App {
  startGame() {
    this.initGame();
    this.computerRandomNumber = generateRandomNumber();
    this.getUserInput();
  }

  initGame() {
    this.userInputNumber = [];
    this.computerRandomNumber = [];
    this.strikeScore = 0;
    this.ballScore = 0;
    this.compareResultText = '';
    this.isThreeStrike = false;
  }

  getUserInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      this.userInputNumber = [...String(userInput).split('').map((x) => +x)];
      if (checkValidUserInput(this.userInputNumber)) {
        this.calculateResult();
      }
      this.getCompareResultText();
      MissionUtils.Console.print(this.compareResultText);
      if (!this.isThreeStrike) {
        return this.getUserInput();
      }
      if (this.isThreeStrike) {
        return this.askRestart();
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

  getCompareResultText() {
    if (this.strikeScore === 0 && this.ballScore === 0) {
      this.compareResultText = '낫싱';
    } else if (this.ballScore === 0) {
      this.compareResultText = `${this.strikeScore}스트라이크`;
      if (this.strikeScore === 3) {
        this.isThreeStrike = true;
      }
    } else if (this.strikeScore === 0) {
      this.compareResultText = `${this.ballScore}볼`;
    } else if (this.strikeScore > 0 && this.ballScore > 0) {
      this.compareResultText = `${this.ballScore}볼 ${this.strikeScore}스트라이크`;
    }
  }

  askRestart() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임종료');
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요', (userInput) => {
      if (userInput === '1') {
        return this.startGame();
      }
      if (userInput === '2') {
        MissionUtils.Console.close();
      }
    });
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }
}

module.exports = App;
