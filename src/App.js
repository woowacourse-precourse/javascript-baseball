const { Console, Random } = require("@woowacourse/mission-utils");
// const { ValidateUserInput } = require("./ValidateInput");

function isValidUserInput(userInput) {
  const ERROR_TEXT = new Error('세 자리 수를 1부터 9까지 중복되지 않도록 입력해주세요!');
  const isNumberElement = (element) => (element >= '1' && element <= '9');
  const userNumbers = [];
  userInput
    .split('')
    .forEach(element => {
      !userNumbers.includes(element) ? userNumbers.push(element) : ""
    });

  if (
    userNumbers.length !== 3 ||
    !(userNumbers).every(isNumberElement)
  ) throw ERROR_TEXT;

  return userNumbers.map(Number);
}

class RandomSelectNumbersByComputer {
  randomSelectComputerNumbers() {
    const selectedNumber = Random.pickUniqueNumbersInRange(1, 9, 3);

    return selectedNumber;
  }
}

module.exports = RandomSelectNumbersByComputer;

class BaseballGame {
  constructor() {
    this.computerNumbers =
      new RandomSelectNumbersByComputer().randomSelectComputerNumbers();
  }

  playGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
    Console.print(this.computerNumbers);
    Console.readLine("숫자를 입력해주세요 : ", this.progressTurn);
  }

  progressTurn(userInput) {
    const userNumbers = isValidUserInput(userInput);
    console.log(userNumbers);

    // this.validateUserInput.isValidUserInput(userInput);
    // Console.print(this.validateUserInput.userNumbers);
  }

}

module.exports = BaseballGame;

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.playGame();
  }
}

module.exports = App;

function check() {
  const app = new App();

  app.play();
  return 0;
}

check();