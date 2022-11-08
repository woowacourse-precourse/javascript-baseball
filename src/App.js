const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randomNums = this.createRandomNums();
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.getUserInput();
  }

  createRandomNums() {
    const randomNums = [];
    while (randomNums.length < 3) {
      let randomNum = Random.pickNumberInRange(1, 9);
      if (!randomNums.includes(randomNum)) randomNums.push(randomNum);
    }
    return randomNums;
  }

  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      parseInt(input);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
