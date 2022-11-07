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
    Console.print(this.computerNum);
  }

  userInput() {
    Console.readLine("숫자를 입력해주세요 : ", (inputNum) => {
      this.isValid(inputNum);
    });
  }

  isValid(num) {
    const inputNumArr = Array.from(String(num), (arg) => Number(arg));
    const inputNunSet = new Set(inputNumArr);

    if (inputNumArr.length !== NUMBERLENGTH) {
      throw "3자리가 아님";
    }
    if (inputNumArr.length !== inputNunSet.size) {
      throw "중복 숫자 있음";
    }
    if (isNaN(num)) {
      throw "숫자가 아님";
    }

    this.compareNum(inputNumArr, this.computerNum);
  }

  compareNum(inputNumArr, computerNum) {
    let strikeCount = 0;
    let ballCount = 0;
    for (var index = 0; index < NUMBERLENGTH; index++) {
      let sameFind = inputNumArr.indexOf(computerNum[index]);
      if (sameFind >= 0 && sameFind === index) {
        strikeCount++;
      } else if (sameFind >= 0 && sameFind !== index) {
        ballCount++;
      }
    }

    // Console.print(strikeCount);
    // Console.print(ballCount);
  }
}
const app = new App();
app.play();

module.exports = App;
