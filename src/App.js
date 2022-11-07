const MissonUtils = require("@woowacourse/mission-utils");
const checkUserInput = require("./ExceptionUserInput");

class App {
  constructor() {
    this.computerRandomNumbers = [];
  }
  play() {
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
      if (checkUserInput(userInput)) MissonUtils.Console.print(userInput.split('').map(Number));
    });
  }
}

module.exports = App;

const app = new App();
app.play();
