const { Console } = require("@woowacourse/mission-utils");
const ComputerNumbers = require("./ComputerNumbers");
const ValidUserNumbers = require("./ValidUserNumbers");

class BaseballGame {
  constructor() {
    this.validUserNumbers = new ValidUserNumbers();
  }

  printResult(strikeCount, ballCount) {
    if (strikeCount === 0 && ballCount === 0) {
      return Console.print("낫싱");
    }
    const strikeCountComment = (strikeCount > 0) ? `${strikeCount}스트라이크` : '';
    (ballCount === 0) ? Console.print(`${strikeCountComment}`) : Console.print(`${ballCount}볼 ${strikeCountComment}`);
  };

  start() {
    Console.print('숫자 야구 게임을 시작합니다.');

    return this.playGame();
  }

  playGame() {
    this.computerNumbers = ComputerNumbers.randomSelectComputerNumbers();

    return this.inputUserNumbers(this.computerNumbers);
  }

  inputUserNumbers(computerNumbers) {
    Console.readLine("숫자를 입력해주세요 : ", userInput => {
      const validUserInput = this.validUserNumbers.isValidUserInput(userInput);
      if (validUserInput === false) {
        this.throwError('세 자리 수를 1부터 9까지 중복되지 않도록 입력해주세요!');
      }
      this.progressTurn(userInput, computerNumbers);
    });
  }

  progressTurn(userInput, computerNumbers) {
    const { strikeCount, ballCount } = this.getStrikeAndBallCount(userInput, computerNumbers);
    this.printResult(strikeCount, ballCount);
    (strikeCount === 3) ? this.restartOrEndGame() : this.inputUserNumbers(computerNumbers);
  }

  getStrikeAndBallCount(userInput, computerNumbers) {
    const computerNumbersArray = [...computerNumbers];
    const userInputArray = [...userInput];
    let strikeCount = 0;
    let ballCount = 0;
    userInputArray.map((number, index) => {
      (number === computerNumbersArray[index]) ? strikeCount++ :
        (computerNumbersArray.includes(number)) ? ballCount++ : 0;
    });
    return { strikeCount, ballCount };
  }

  restartOrEndGame() {
    this.restart = true;
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (number) => {
      (number !== '1' && number !== '2') ? this.throwError('잘못된 값을 입력하셨습니다. 1또는 2를 입력해주세요.') :
        (number === '1') ? this.playGame() : this.exitConsole();
    });
  }

  exitConsole() {
    Console.close();
  }

  throwError(messages) {
    throw new Error(messages);
  }
}

module.exports = BaseballGame;
