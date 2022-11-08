const MissonUtils = require("@woowacourse/mission-utils");
const checkBallAndStrike = require("./CountBallandStrike");
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
      this.chooseRestartGame();
    } else if (!gameResult) {
      return this.userInputNumber();
    }
  }

  chooseRestartGame() {
    MissonUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    MissonUtils.Console.readLine('', chooseNumber => {
      if (chooseNumber === '1') this.gameStart();
      if (chooseNumber === '2') MissonUtils.Console.close();
      if (chooseNumber !== '1' && chooseNumber !== '2') throw '게임 시작은 1, 종료는 2를 입력하셔야 합니다.';
    });
  }
}

module.exports = App;

const app = new App();
app.play();
