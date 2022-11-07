const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerInput = [];
    this.userInput = [];
  }

  play() {
    this.computerInput = this.selectRandomNumber();
    this.userInput = [1, 2, 3]; // 디버깅용
    // this.userInputNumber();

    console.log(`정답: ${this.computerInput} / 입력: ${this.userInput}`);
    this.compareNumber(this.userInput);

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

  // userInputNumber() {
  //   MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
  //     this.userInput = answer.split("");
  //   });
  //   this.compareNumber(this.userInput);
  // }

  compareNumber() {
    let score = [0, 0]; //[ 볼, 스트라이크]
    this.isStrike(this.computerInput, this.userInput, score);
    console.log(`${score[0]} 볼 ${score[1]} 스트라이크`);
  }

  isStrike(ans, input, score) {
    console.log(ans, input);
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
}

const app = new App();
app.play();
// module.exports = App;
