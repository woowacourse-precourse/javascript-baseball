const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerInput = [];
    this.userInput = [];
  }

  play() {
    this.computerInput = this.selectRandomNumber();
    console.log("정답", this.computerInput);
    this.userInputNumber();
    // this.userInput = [1, 2, 3];
    // this.isValidate(this.userInput);
    // this.compareNumber(this.userInput);

    return;
  }

  selectRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) {
        number = number.toString();
        randomNumber.push(number);
      }
    }
    return randomNumber;
  }

  userInputNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.userInput = answer.split("");
      console.log(this.userInput);
      this.isValidate(this.userInput);
      this.compareNumber(this.userInput);
    });
  }

  compareNumber() {
    let score = [0, 0]; //[ 볼, 스트라이크]
    this.isStrike(this.computerInput, this.userInput, score);

    let result = "";
    if (score[0] === 0 && score[1] === 0) {
      result = "낫싱";
    } else if (score[1] === 3) {
      result = "3스트라이크";
    } else {
      result = `${score[0]}볼 ${score[1]}스트라이크`;
    }

    MissionUtils.Console.print(result);

    if (score[1] === 3) {
      this.finishOrRestart();
    } else {
      this.userInputNumber();
    }
  }

  isStrike(ans, input, score) {
    for (let i = 0; i < 3; i++) {
      if (input[i] === ans[i]) {
        score[1] += 1;
      } else {
        this.isBall(i, ans, input, score);
      }
    }
    return score;
  }
  isBall(i, ans, input, score) {
    if (i === 0) {
      if (input[i] === ans[1] || input[i] === ans[2]) {
        score[0] += 1;
      }
    } else if (i === 1) {
      if (input[i] === ans[2] || input[i] === ans[0]) {
        score[0] += 1;
      }
    } else if (i === 2) {
      if (input[i] === ans[0] || input[i] === ans[1]) {
        score[0] += 1;
      }
    }
  }
  finishOrRestart() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        if (Number(answer) === 1) {
          this.play();
        } else if (Number(answer) === 2) {
          MissionUtils.Console.print("게임을 종료합니다.");
          MissionUtils.Console.close();
        } else {
          MissionUtils.Console.print(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );
        }
      }
    );
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
