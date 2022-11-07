const MissionUtils = require("@woowacourse/mission-utils");
const RandomNumber = require("./RandomNumber");
const Constraints = require("./Constraints");
const Console = MissionUtils.Console;

class App {
  constructor() {
    this.showStartMessage();
    this.constraints = new Constraints();
  }

  play() {
    this.COMPUTER = RandomNumber.makeRandomNumber();
    this.getPlayerInput();
  }

  showStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  getPlayerInput() {
    Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      this.constraints.checkConstraints(userInput);

      this.comparePlayerInputWithRandomNumber(userInput);
    });
  }

  comparePlayerInputWithRandomNumber(userInput) {
    this.ball = 0;
    this.strike = 0;

    const USER_INPUT = userInput.split("").map((item) => Number(item));

    this.checkBallOrStrike(USER_INPUT);

    this.showPlayerResult();
  }

  checkBallOrStrike(userInputArray) {
    for (let index = 0; index < this.COMPUTER.length; index++) {
      if (this.COMPUTER[index] === userInputArray[index]) {
        this.strike++;
        continue;
      }

      if (userInputArray.includes(this.COMPUTER[index])) {
        this.ball++;
      }
    }
  }

  showPlayerResult() {
    if (this.strike === 3) {
      Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      this.getPlayerRePlayInput();

      return;
    }

    if (this.ball === 0 && this.strike === 0) {
      Console.print("낫싱");

      this.getPlayerInput();

      return;
    }

    if (this.ball !== 0 && this.strike !== 0) {
      Console.print(`${this.ball}볼 ${this.strike}스트라이크`);

      this.getPlayerInput();

      return;
    }

    if (this.ball !== 0 && this.strike === 0) {
      Console.print(`${this.ball}볼`);

      this.getPlayerInput();

      return;
    }

    if (this.ball === 0 && this.strike !== 0 && this.strike !== 3) {
      Console.print(`${this.strike}스트라이크`);

      this.getPlayerInput();
    }
  }

  getPlayerRePlayInput() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userInput) => {
        this.constraints.checkRePlayInputConstraints(userInput);

        this.decideRePlay(userInput);
      }
    );
  }

  decideRePlay(userInput) {
    if (userInput === "1") {
      this.play();

      return;
    }

    if (userInput === "2") {
      Console.close();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
