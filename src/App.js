const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }
  play() {
    this.computerNumber = this.initNumber();
    this.showPrint("숫자 야구 게임을 시작합니다.");
    this.compareNumber();
  }
  showPrint(messages) {
    MissionUtils.Console.print(messages);
  }

  initNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  compareNumber() {
    const initPrintNumber = this.computerNumber.join("");
    console.log("시작 값", initPrintNumber);
    MissionUtils.Console.readLine("번호를 입력하세요", (userPrintNumber) => {
      const userNumber = userPrintNumber.split("").map((number) => +number);
      const strikeScore = this.isStrike(this.computerNumber, userNumber);
      const ballScore = this.isBall(this.computerNumber, userNumber);
      const checkNothing = this.isNothing(this.computerNumber, userNumber);
      let saveString = `${ballScore} ${strikeScore}`;
      this.isValidate(userNumber);
      if (checkNothing === "낫싱") {
        MissionUtils.Console.print(`낫싱`);
        this.compareNumber();
      } else if (
        ballScore === null &&
        checkNothing == false &&
        strikeScore === "3스트라이크"
      ) {
        MissionUtils.Console.print(`3스트라이크`);
        MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다!`);
        this.isContinue();
      } else if (strikeScore !== null && ballScore !== null) {
        MissionUtils.Console.print(saveString);
        this.compareNumber();
      } else if (strikeScore !== null && ballScore === null) {
        MissionUtils.Console.print(strikeScore);
        this.compareNumber();
      } else if (strikeScore === null && ballScore !== null) {
        MissionUtils.Console.print(ballScore);
        this.compareNumber();
      }
    });
  }
  isContinue() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (userNumber) => {
        if (userNumber == 1) {
          this.play();
        }
        if (userNumber == 2) {
          this.showPrint("게임 종료");
          MissionUtils.Console.close();
        }
      }
    );
  }
  isBall(initNum, userNum) {
    let ball = 0;

    initNum.forEach((number, index) => {
      userNum.indexOf(number) !== -1 && userNum.indexOf(number) !== index
        ? ball++
        : null;
    });

    if (ball === 0) {
      return null;
    } else {
      return `${ball}볼`;
    }
  }
  isStrike(initNum, userNum) {
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      initNum[i] === userNum[i] ? strike++ : null;
    }

    if (strike === 0) {
      return null;
    } else {
      return `${strike}스트라이크`;
    }
  }
  isNothing(initNum, userNum) {
    let answer = true;

    initNum.forEach((number, index) => {
      userNum.indexOf(number) !== -1 ? (answer = false) : null;
    });

    if (answer === true) return "낫싱";
    return answer;
  }

  isValidate(input) {
    const repeatCheck = new Set(input);
    if (repeatCheck.size !== 3) {
      throw new Error("서로 다른 3자리 숫자를 입력하세요");
    }
    let checkString = 0;
    input.map((user) => {
      if (isNaN(user)) checkString = 1;
    });
    if (checkString === 1) {
      throw new Error("숫자를 입력하세요");
    }
    if (input.length !== 3) {
      throw new Error("3자리 숫자를 입력하세요");
    }
    if (input.includes("0")) {
      throw new Error("1~9 사이의 숫자로 이루어진 숫자를 입력하세요");
    }
  }
}

const app = new App();
app.play();

module.exports = App;
