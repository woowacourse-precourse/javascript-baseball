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
    console.log("비교할게!");
    let score = [0, 0]; //[ 볼, 스트라이크]
    this.isStrike(this.computerInput, this.userInput);
    console.log(`${score[0]} 볼 ${score[1]} 스트라이크`);
  }

  isStrike(ans, input) {
    console.log(ans, input);
    for (let i = 0; i < 3; i++) {
      if (input[i] === ans[i]) {
        score[1] += 1;
      } else {
        console.log("볼 체크");
      }
    }
  }
}

const app = new App();
app.play();
// module.exports = App;
