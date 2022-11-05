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
    if (userInput.length !== 3) throw "세자리 수를 입력해주세요.";
    else if (new Set(userInput).size !== 3) throw "중복이 있습니다.";
    else if (userInput.includes("0")) throw "0을 포함합니다.";
    return true;
  }

  compareInputWithAnswer(userInput) {
    const strike = this.countStrike(userInput);
    const ball = this.countBall(userInput);
    if (strike === 3) {
      this.printEndMessage();
      this.askRestart();
    } else {
      this.printCompareResult(strike, ball);
      this.printInputMessage();
    }
  }

  printEndMessage() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  askRestart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userInput) => {
        if (userInput === "1") {
          this.play();
        } else if (userInput === "2") {
          MissionUtils.Console.close();
        } else {
          MissionUtils.Console.close();
        }
      }
    );
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

  printCompareResult(strike, ball) {
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
