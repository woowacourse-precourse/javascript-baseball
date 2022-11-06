const { Console, Random } = require("@woowacourse/mission-utils");

class BaseballGame {
  randomSelectComputerNumbers() {
    const randomNumbers = [];

    while (randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (randomNumbers.includes(number) === false) {
        randomNumbers.push(number);
      }
    }

    return randomNumbers.join('');
  }


  printResult(strikeCount, ballCount) {
    if (strikeCount === 0 && ballCount === 0) Console.print("낫싱");
    else if (strikeCount > 0 && ballCount === 0) Console.print(`${strikeCount}스트라이크`);
    else if (ballCount > 0 && strikeCount === 0) Console.print(`${ballCount}볼`);
    else Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
  };

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.playGame();
  }

  playGame() {
    const computerNumbers = this.randomSelectComputerNumbers();
    this.inputUserNumbers(computerNumbers);
  }

  inputUserNumbers(computerNumbers) {
    Console.readLine("숫자를 입력해주세요 : ", userInput => {
      const validUserInput = this.isValidUserInput(userInput);
      if (validUserInput === false) {
        this.throwError('세 자리 수를 1부터 9까지 중복되지 않도록 입력해주세요!');
      }

      this.progressTurn(userInput, computerNumbers);
    });
  }

  progressTurn(userInput, computerNumbers) {
    const computerNumbersArray = [...computerNumbers];
    const userInputArray = [...userInput];
    let strikeCount = 0;
    let ballCount = 0;
    userInputArray.map((number, index) => {
      if (number === computerNumbersArray[index]) {
        strikeCount++;
      } else if (computerNumbersArray.includes(number)) {
        ballCount++;
      }
    });
    this.printResult(strikeCount, ballCount);
    (strikeCount === 3) ? this.restartOrEndGame() : this.inputUserNumbers(computerNumbers);
  }

  restartOrEndGame() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (number) => {
      if (number === '1') {
        return this.playGame();
      }

      if (number === '2') {
        return this.exitConsole();
      }

      return this.throwError('잘못된 값을 입력하셨습니다. 1 또는 2를 입력해주세요.');
    });
  }

  isValidUserInput(userInput) {
    const isNumberElement = (element) => (element >= '1' && element <= '9');
    const userNumbers = [];
    userInput
      .split('')
      .forEach(element => {
        !userNumbers.includes(element) ? userNumbers.push(element) : ""
      });

    return (
      userNumbers.length === 3 &&
      (userNumbers).every(isNumberElement)
    )
  }

  exitConsole() {
    Console.close();
  }

  throwError(messages) {
    throw new Error(messages);
  }
}

module.exports = BaseballGame;

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.play();
  }
}

module.exports = App;

const app = new App();
app.play();

