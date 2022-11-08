const MissonUtils = require("@woowacourse/mission-utils");
const { EXCEPTIONMESSAGE, GAMEMESSAGE } = require("./ConstMessage");
const checkBallAndStrike = require("./CountBallandStrike");
const checkUserInput = require("./ExceptionUserInput");

class App {
  constructor() {
    this.computerRandomNumbers = [];
    this.userRandomNumbers = [];
  }
  play() {
    MissonUtils.Console.print(GAMEMESSAGE.START_MESSAGE);
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
    MissonUtils.Console.readLine(GAMEMESSAGE.USER_INPUT_MESSAGE, userInput => {
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
    MissonUtils.Console.print(GAMEMESSAGE.GAME_RESTART_MESSAGE);
    MissonUtils.Console.readLine('', chooseNumber => {
      if (chooseNumber === '1') this.gameStart();
      if (chooseNumber === '2') MissonUtils.Console.close();
      if (chooseNumber !== '1' && chooseNumber !== '2') throw EXCEPTIONMESSAGE.NOT_ONE_TWO;
    });
  }
}

module.exports = App;

const app = new App();
app.play();
