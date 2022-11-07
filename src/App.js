const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerInput = [];
    this.userInput = [];
  }

  play() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.computerInput = this.selectRandomNumber();
    console.log(`정답: ${this.computerInput}`);

    this.userInputNumber();

    // this.computerInput = [1, 2, 3]; // 디버깅용
    // this.userInput = [1, 1, 1]; // 디버깅용

    // this.compareNumber(this.userInput);

    return;
  }

  selectRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }

    return randomNumber;
  }

  userInputNumber() {
    // MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    //   this.userInput = answer.split("");
    // });
    this.userInput = [1, 2, 3];
    console.log(this.userInput);

    this.isValidate(this.userInput);
    this.compareNumber(this.userInput);
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

    console.log(result);

    if (score[1] === 3) {
      this.finishOrRestart();
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
    console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

    let selected = 2;
    if (selected === 1) {
      this.play();
    } else if (selected === 2) {
      MissionUtils.Console.close();
    } else {
      console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    }
  }
  isValidate(input) {
    input.map((num) => {
      if (typeof num !== "number") {
        throw new Error("숫자를 입력하세요");
      }
      if (input.includes(`${num}`) === true) {
        throw new Error("서로 다른 3자리 숫자를 입력하세요");
      }
    });
    if (input.length !== 3) {
      throw new Error("3자리 숫자를 입력하세요");
    }
    if (input.includes("0")) {
      throw new Error("1~9 사이의 숫자로 이루어진 숫자를 입력하세요");
    }
    // - 반복되는 숫자가 존재할 시
  }
}

const app = new App();
app.play();
// module.exports = App;
