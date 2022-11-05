const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.computerNumber = 1;
  }

  play() {
    this.computerNumber = this.createComputerNumber();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.printInputMessage();
  }

  createComputerNumber() {
    const eachNumberArray = [];
    while (eachNumberArray.length < 3) {
      let eachNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!eachNumberArray.includes(eachNumber)) {
        eachNumberArray.push(eachNumber);
      }
    }
    return eachNumberArray.join("");
  }

  printInputMessage() {
    MissionUtils.Console.readLine("숫자를 입력해주세요:", (userInput) => {
      if (this.checkInputValidation(userInput)) {
        this.compareInputWithAnswer(userInput);
      } else {
        MissionUtils.Console.close();
      }
    });
  }

  checkInputValidation(userInput) {
    if (userInput.length < 3) return;
    else if (new Set(userInput).size !== 3) return;
    else if (userInput.includes("0")) return;
    return true;
  }

  compareInputWithAnswer(userInput) {
    const strike = this.countStrike(userInput);
    const ball = this.countBall(userInput);
    if (strike === 3) {
      this.printEndMessage();
    } else {
      this.printResult(strike, ball);
      this.printInputMessage();
    }
  }

  printEndMessage() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  countStrike(userInput) {
    let strike = 0;
    for (let i = 0; i < this.computerNumber.length; i++) {
      const userIndex = userInput.indexOf(this.computerNumber[i]);
      if (userIndex !== -1 && userIndex === i) {
        strike++;
      }
    }
    return strike;
  }

  countBall(userInput) {
    let ball = 0;
    for (let i = 0; i < this.computerNumber.length; i++) {
      const userIndex = userInput.indexOf(this.computerNumber[i]);
      if (userIndex !== -1 && userIndex !== i) {
        ball++;
      }
    }
    return ball;
  }

  printResult(strike, ball) {
    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print("낫싱");
    }
    if (ball !== 0 && strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    }
    if (ball === 0 && strike !== 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    }
    if (ball !== 0 && strike !== 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
}
const app = new App();
app.play();

module.exports = App;
