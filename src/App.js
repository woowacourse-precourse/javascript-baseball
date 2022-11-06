const { Console, Random } = require("@woowacourse/mission-utils");

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
    this.inputUserNumbers(computerNumbers);
  }

  inputUserNumbers(computerNumbers) {
    Console.readLine("숫자를 입력해주세요 : ", userInput => {
      const userNumbers = this.isValidUserInput(userInput);
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
    (strikeCount === 3) ? this.restartOrEndGame() : this.inputUserNumbers(computerNumbers);
  }

  restartOrEndGame() {
    const ERROR_TEXT = new Error('잘못된 값을 입력하셨습니다. 1 또는 2를 입력해주세요.');
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (number) => {
      if (number === '1') {
        const computerNumbers = this.randomSelectComputerNumbers();
        this.inputUserNumbers(computerNumbers);
      } else if (number === '2') {
        Console.close();
      } else {
        Console.close();
        throw ERROR_TEXT;
      }
    });
  }

  isValidUserInput(userInput) {
    const ERROR_COMMENT = new Error('세 자리 수를 1부터 9까지 중복되지 않도록 입력해주세요!');
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
    ) {
      throw ERROR_COMMENT;
    }

    return userNumbers.map(Number);
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