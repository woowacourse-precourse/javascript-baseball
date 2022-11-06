const { Console, Random } = require("@woowacourse/mission-utils");
const NUMBERLENGTH = 3;

class App {
  constructor() {
    this.computerNum = [];
    this.userNum;
  }

  play() {
    this.gameStart();
    this.setComputerNum();
    this.userInput();
  }

  gameStart() {
    Console.print("숫자 야구 게임을 시작합니다");
  }

  setComputerNum() {
    while (this.computerNum.length < NUMBERLENGTH) {
      const randomNum = Random.pickNumberInRange(1, 9);
      this.computerNum.includes(randomNum)
        ? ""
        : this.computerNum.push(randomNum);
    }
  }

  userInput() {
    Console.readLine("숫자를 입력해주세요 : ", (inputNum) => {
      this.userNum = inputNum;
    });
  }
}
const app = new App();
app.play();

module.exports = App;
