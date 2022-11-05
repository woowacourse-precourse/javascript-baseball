const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
  }
  play() {
    MissionUtils.Console.print(this.GAME_START_MESSAGE);
    App.startGame();
  }

  static startGame() {
    App.init();
    App.getUserInputNumber();
  }

  static init() {
    this.userNumber = 0;
    this.gameEndStatus = false;
    this.gameOptionValue = 0;
    this.computerNumberArray = App.generateComputerNumberArray();
    this.isValidUserNumber = false;
  }

  static compareNumber() {
    const userNumberArray = App.convertUserNumberToArray().map((number) => +number);
    let strikeCount = 0;
    let ballCount = 0;

    userNumberArray.forEach((userNumber, index) => {
      if (this.computerNumberArray.includes(userNumber)) {
        if (this.computerNumberArray[index] === userNumber) strikeCount += 1;
        else ballCount += 1;
      }
    });
    App.printResult(strikeCount, ballCount);
  }

  static getUserGameOptionValue() {
    return MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ", (input) => {
      MissionUtils.Console.print(`입력하신 숫자는 ${input} 입니다.`);
      this.gameOptionValue = input;
      App.validateUserGameOptionValueInput();
    });
  }

  static runByGameOptionValue() {
    if (+this.gameOptionValue === 2) MissionUtils.Console.close();
    if (+this.gameOptionValue === 1) App.startGame();
  }

  static validateUserGameOptionValueInput() {
    if (+this.gameOptionValue !== 1 && +this.gameOptionValue !== 2) throw new Error("1,2 만 입력해주세요");
    else App.runByGameOptionValue();
  }

  static validateUserInput(userNumber) {
    if (typeof +userNumber !== "number" || Number.isNaN(Number(userNumber))) throw new Error("숫자를 입력해주세요 어플리케이션을 종료합니다");
    if (userNumber.toString().length > 3 || userNumber.toString().length < 3) throw new Error("3자리수를 입력해주세요. 어플리케이션을 종료합니다");
    if (new Set([...App.convertUserNumberToArray()]).size !== 3) throw new Error("중복되지 않은 숫자 3자리를 입력해주세요");
    if (!(+userNumber % 1 === 0) || Math.sign(+userNumber) === -1) throw new Error("소수점과 마이너스는 허용되지않습니다.");
    else this.isValidUserNumber = true;
    if (this.isValidUserNumber === true) App.compareNumber();
  }

  static printResult(strikeCount, ballCount) {
    if (strikeCount === 3) {
      MissionUtils.Console.print(`${strikeCount}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      this.gameEndStatus = true;
      App.getUserGameOptionValue();
    }
    if (strikeCount > 0 && ballCount > 0) MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크 `);
    if (strikeCount > 0 && ballCount === 0) MissionUtils.Console.print(`${strikeCount}스트라이크`);
    if (ballCount > 0 && strikeCount === 0) MissionUtils.Console.print(`${ballCount}볼`);
    if (ballCount === 0 && strikeCount === 0) MissionUtils.Console.print("낫싱");
    if (this.gameEndStatus === false) this.getUserInputNumber();
  }

  static convertUserNumberToArray() {
    return this.userNumber.toString().split("");
  }

  static getUserInputNumber() {
    return MissionUtils.Console.readLine("숫자를입력해주세요: ", (input) => {
      MissionUtils.Console.print(`입력하신 숫자는 ${input} 입니다.`);
      this.userNumber = input;
      App.validateUserInput(this.userNumber);
    });
  }

  static generateComputerNumberArray() {
    const computerNumberArray = [];
    while (computerNumberArray.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumberArray.includes(randomNumber)) computerNumberArray.push(randomNumber);
    }
    return computerNumberArray;
  }
}

module.exports = App;

const app = new App();

console.log(app.play());
