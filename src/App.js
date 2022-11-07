const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
class App {
  constructor() {
    this.enemy = [];
    this.userInputArr = [];
    this.strikes = 0;
    this.balls = 0;
  }

  printMessage(message) {
    Console.print(message);
  }

  lengthCheck(inputData) {
    return inputData.length === 3;
  }

  isNumber(inputData) {
    return Number.isInteger(inputData);
  }

  isNegative(inputData) {
    return Math.sign(inputData) === -1;
  }

  checkValidData(data) {
    return (
      !this.lengthCheck(data) || this.isNegative(data) || this.isNumber(data)
    );
  }

  setRandomNumber() {
    while (this.enemy.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (this.enemy.indexOf(number) === -1) this.enemy += `${number}`;
    }
    this.enemy = [...this.enemy];
  }

  countingBallOrStrike(target) {
    if (this.userInputArr.indexOf(target) !== -1) {
      if (this.enemy.indexOf(target) === this.userInputArr.indexOf(target))
        this.strikes++;
      else this.balls++;
    }
  }

  checkBallOrStrike() {
    this.enemy.map((target) => {
      this.countingBallOrStrike(target);
    });
  }

  getUserInputData() {
    this.strikes = 0;
    this.balls = 0;
    Console.readLine("숫자를 입력해주세요. : ", (answer) => {
      if (this.checkValidData(answer))
        throw new Error("잘못된 값이 입력되었습니다.");
      this.userInputArr = [...answer];
      this.checkBallOrStrike();
    });
  }

  gameStart() {
    this.setRandomNumber();
    this.getUserInputData();
  }

  play() {
    this.printMessage("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }
}

const app = new App();
app.play();
module.exports = App;
