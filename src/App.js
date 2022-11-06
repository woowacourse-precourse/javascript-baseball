const MissionUtils = require("@woowacourse/mission-utils");
const {
  Console: { readLine, print, close },
  Random,
} = MissionUtils;
const inputValidation = require("./inputValidation");
const outputValidation = require("./outputValidation");

class App {
  constructor(inputNum, randomNum) {
    this.inputNum = inputNum;
    this.randomNum = randomNum;
  }

  play() {
    this.randomNumber();
    this.userInput().then(() => {
      this.checkInputValidation();
    });
  }

  async userInput() {
    return new Promise((resolve) => {
      readLine("숫자를 입력해주세요 : ", (input) => {
        this.inputNum = input;
        if (!this.checkInputValidation()) {
          throw "잘못된 값을 입력하셨습니다.";
        }
        print(input);
        close();
        resolve(input);
      });
    });
  }

  checkInputValidation() {
    inputValidation.checkNoOverlap(this.inputNum);
    inputValidation.checkOnlyNum(this.inputNum);
    inputValidation.checkThreeNum(this.inputNum);
  }

  randomNumber() {
    this.randomNum = [];
    for (let rotate = 0; rotate < 3; rotate++) {
      const random = Random.pickNumberInRange(1, 9);
      if (this.randomNum.indexOf(random) === -1) {
        this.randomNum.push(random);
      } else {
        rotate--;
      }
    }
    return this.randomNum;
  }
}
const startGame = new App();
startGame.play();

module.exports = App;
