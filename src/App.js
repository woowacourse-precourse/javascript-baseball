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
    this.isStrike(this.userInput);
  }

  isStrike() {
    for (let i = 0; i < 3; i++) {
      if (this.userInput[i] === this.computerInput[i]) {
        score[1] += 1;
      } else {
        // isBall(i);
        console.log("스트라이크는 아님");
      }
    }
  }
}

const app = new App();
app.play();
module.exports = App;
