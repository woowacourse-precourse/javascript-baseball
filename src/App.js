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
    this.userInput();
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
    this.compareResultPrint(strikeCount, ballCount);
  }

  compareResultPrint(strikeCount, ballCount) {
    if (strikeCount + ballCount === 0) {
      Console.print("낫싱");
      this.userInput();
    } else if (strikeCount === 3) {
      Console.print("3스트라이크");
      this.winGame();
    } else if (strikeCount > 0 && strikeCount < 3) {
      {
        ballCount > 0
          ? Console.print(`${ballCount}볼 ${strikeCount}스트라이크`)
          : Console.print(`${strikeCount}스트라이크`);
      }
      this.userInput();
    } else if (ballCount > 0) {
      {
        strikeCount > 0
          ? Console.print(`${ballCount}볼 ${strikeCount}스트라이크`)
          : Console.print(`${ballCount}볼`);
      }
      this.userInput();
    }
  }

  winGame() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임종료");
    this.isRestartGame();
  }

  isRestartGame() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (isResatrtNum) => {
        if (isResatrtNum === "1") {
          this.computerNum = [];
          this.setComputerNum();
        } else {
          Console.close();
        }
      }
    );
  }
}
const app = new App();
app.play();

module.exports = App;
