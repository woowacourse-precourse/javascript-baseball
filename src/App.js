const MissonUtils = require("@woowacourse/mission-utils");
const checkBallAndStrike = require("./BaseballGame");
const checkUserInput = require("./ExceptionUserInput");

class App {
  constructor() {
    this.computerRandomNumbers = [];
    this.userRandomNumbers = [];
  }
  play() {
    MissonUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.gameStart();
  }

  gameStart() {
    this.createOpponentRandomNumber();
    this.userInputNumber();
  }

  createOpponentRandomNumber() {
    const computer = new Set();
    while (computer.size < 3) {
      const randomNumber = MissonUtils.Random.pickNumberInRange(1, 9);
      computer.add(randomNumber);
    }
  
    this.computerRandomNumbers = [...computer];
  }

  userInputNumber() {
    return MissonUtils.Console.readLine('숫자를 입력해주세요 : ', userInput => {
      if (checkUserInput(userInput)) this.baseballGame(userInput.split('').map(Number));
    });
  }

  baseballGame(userNumber) {
    this.userRandomNumbers = userNumber;
    const gameResult = checkBallAndStrike(this.computerRandomNumbers, this.userRandomNumbers);
    if (gameResult) {
      MissonUtils.Console.close();
    } else if (!gameResult) {
      return this.userInputNumber();
    }
  }
}

module.exports = App;

const app = new App();
app.play();
