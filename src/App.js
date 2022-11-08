const MissionUtils = require('@woowacourse/mission-utils');
const checkValidUserInput = require('./utils/checkValidUserInput');
const generateRandomNumber = require('./game/generateRandomNumber');
const calculateScore = require('./game/calculateScore');
const getCompareResultText = require('./game/getCompareResultText');

class App {
  startGame() {
    this.initGame();
    this.computerRandomNumber = generateRandomNumber();
    this.getUserInput();
  }

  initGame() {
    this.userInputNumber = [];
    this.computerRandomNumber = [];
    this.strike = 0;
    this.ball = 0;
    this.compareResultText = '';
  }

  getUserInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      this.userInputNumber = [...String(userInput).split('').map((x) => +x)];
      checkValidUserInput(this.userInputNumber);
      this.calculateResult();
    });
  }

  calculateResult() {
    [this.strike, this.ball] = calculateScore(this.userInputNumber, this.computerRandomNumber);
    this.compareResultText = getCompareResultText(this.strike, this.ball);
    MissionUtils.Console.print(this.compareResultText);
    this.checkThreeStrike();
  }

  checkThreeStrike() {
    if (this.strike !== 3) {
      this.getUserInput();
    }
    if (this.strike === 3) {
      this.askRestart();
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
