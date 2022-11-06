const { Console, Random } = require("@woowacourse/mission-utils");

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

class BaseballGame {
  constructor() {
    this.isThreeStrike = false;
  }

  randomSelectComputerNumbers() {
    const selectedNumber = Random.pickUniqueNumbersInRange(1, 9, 3);

    return selectedNumber;
  }

  printResult(strikeCount, ballCount) {
    if (strikeCount === 0 && ballCount === 0) Console.print("낫싱");
    else if (strikeCount > 0 && ballCount === 0) Console.print(`${strikeCount}스트라이크`);
    else if (ballCount > 0 && strikeCount === 0) Console.print(`${ballCount}볼`);
    else Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
  };

  playGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerNumbers = this.randomSelectComputerNumbers();
    Console.print(computerNumbers);
    this.inputUserNumbers(computerNumbers);
  }

  inputUserNumbers(computerNumbers) {
    Console.readLine("숫자를 입력해주세요 : ", userInput => {
      const userNumbers = isValidUserInput(userInput);
      this.progressTurn(userNumbers, computerNumbers);
    });
  }

  progressTurn(userNumbers, computerNumbers) {
    let strikeCount = 0;
    let ballCount = 0;
    userNumbers.map((number, index) => {
      if (number === computerNumbers[index]) {
        strikeCount++;
      } else if (computerNumbers.includes(number)) {
        ballCount++;
      }
    });
    this.printResult(strikeCount, ballCount);
    (strikeCount === 3) ? Console.close() : this.inputUserNumbers(computerNumbers);
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