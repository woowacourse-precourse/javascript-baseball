const MissionUtils = require("@woowacourse/mission-utils");
const { GAME_MESSAGES, RANGE_NUMBER, ERROR_MESSAGES } = require("./Constant");

class App {
  play() {
    MissionUtils.Console.print(GAME_MESSAGES.START);
    App.startGame();
  }

  static startGame() {
    App.init();
    App.progressGame();
  }

  static init() {
    this.gameEndStatus = false;
    this.computerNumberArray = App.generateComputerNumberArray();
    this.isValidUserNumber = false;
  }

  static compareNumber(userNumber, computerNumber) {
    const userNumberArray = App.convertUserNumberToArray(userNumber).map((number) => +number);
    let strikeCount = 0;
    let ballCount = 0;

    userNumberArray.forEach((userNumber, index) => {
      if (computerNumber.includes(userNumber)) {
        if (computerNumber[index] === userNumber) strikeCount += 1;
        else ballCount += 1;
      }
    });
    // return { strikeCount, ballCount }; 테스트를 위한 리턴 값
    App.printResult(strikeCount, ballCount);
  }

  static runByGameOptionValue(userInput) {
    if (+userInput === 2) MissionUtils.Console.close();
    if (+userInput === 1) App.startGame();
  }

  static validateUserGameOptionValueInput(userInput) {
    if (+userInput !== 1 && +userInput !== 2) throw new Error(ERROR_MESSAGES.ONLY_NUMBER_1_AND_2);
    else App.runByGameOptionValue(userInput);
  }

  static validateUserInput(userNumber) {
    if (typeof +userNumber !== "number" || Number.isNaN(Number(userNumber))) throw new Error(ERROR_MESSAGES.ONLY_NUMBER);
    if (userNumber.toString().length > 3 || userNumber.toString().length < 3) throw new Error(ERROR_MESSAGES.ONLY_THREE_LENGTH_NUMBER);
    if (new Set([...App.convertUserNumberToArray(userNumber)]).size !== 3) throw new Error(ERROR_MESSAGES.NOT_DUPLICATE);
    if (!(+userNumber % 1 === 0) || Math.sign(+userNumber) === -1) throw new Error(ERROR_MESSAGES.NOT_DECIMAL_AND_MINUS);
    else this.isValidUserNumber = true;
    if (this.isValidUserNumber === true) App.compareNumber(userNumber, this.computerNumberArray);
  }

  static printResult(strikeCount, ballCount) {
    if (strikeCount === 3) {
      MissionUtils.Console.print(`${strikeCount}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      this.gameEndStatus = true;
      App.progressGame();
    }
    if (strikeCount > 0 && ballCount > 0) MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크 `);
    if (strikeCount > 0 && ballCount === 0) MissionUtils.Console.print(`${strikeCount}스트라이크`);
    if (ballCount > 0 && strikeCount === 0) MissionUtils.Console.print(`${ballCount}볼`);
    if (ballCount === 0 && strikeCount === 0) MissionUtils.Console.print("낫싱");
    if (this.gameEndStatus === false) this.progressGame();
  }

  static convertUserNumberToArray(userNumber) {
    return userNumber.toString().split("");
  }

  static progressGame() {
    const message = this.gameEndStatus ? GAME_MESSAGES.END_OPTION : GAME_MESSAGES.PROGRESS;

    MissionUtils.Console.readLine(message, (input) => {
      MissionUtils.Console.print(`입력하신 숫자는 ${input} 입니다.`);
      this.gameEndStatus ? App.validateUserGameOptionValueInput(input) : App.validateUserInput(input);
    });
  }

  static generateComputerNumberArray() {
    const computerNumberArray = [];
    while (computerNumberArray.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(RANGE_NUMBER.MIN_RANGE, RANGE_NUMBER.MAX_RANGE);
      if (!computerNumberArray.includes(randomNumber)) computerNumberArray.push(randomNumber);
    }
    return computerNumberArray;
  }
}

module.exports = App;

const app = new App();
app.play();
