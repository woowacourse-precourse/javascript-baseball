const MissionUtils = require("@woowacourse/mission-utils");
const {
  Console: { readLine, print, close },
  Random,
} = MissionUtils;
const inputValidation = require("./validation/inputValidation");
const outputValidation = require("./validation/outputValidation");

class App {
  constructor(inputNum, randomNum, overInputNum) {
    this.inputNum = inputNum;
    this.randomNum = randomNum;
    this.overInputNum = overInputNum;
  }

  play() {
    this.randomNumber();
    this.userInput();
  }

  // userInput logic
  userInit() {
    if (this.inputNum == null) print("숫자 야구 게임을 시작합니다.");
  }

  userInput() {
    this.userInit();
    readLine("숫자를 입력해주세요 : ", (input) => {
      this.inputNum = input;
      if (!this.checkInputValidation()) {
        throw new Error("잘못된 값을 입력하셨습니다.");
      }
      this.game();
      close();
    });
  }

  checkInputValidation() {
    const checkNoOverlap = inputValidation.checkNoOverlap(this.inputNum);
    const checkOnlyNum = inputValidation.checkOnlyNum(this.inputNum);
    const checkTreeNum = inputValidation.checkThreeNum(this.inputNum);
    if (!checkNoOverlap || !checkOnlyNum || !checkTreeNum) {
      return false;
    } else {
      return true;
    }
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

  // 종료 후 logic
  overMessage() {
    print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  }

  overChoice() {}

  // 숫자 야구 게임 logic
  game() {
    let score = "";
    print(this.randomNum);
    if (this.nothing()) {
      print("낫싱");
    }
    if (!this.nothing() && this.ball() > 0) {
      score += `${this.ball()}볼`;
    }
    if (!this.nothing() && this.strike() > 0) {
      score += `${this.strike()}스트라이크`;
    }
    print(score);
  }

  nothing() {
    const userInputArr = [...this.inputNum];
    for (let index = 0; index < 3; index++) {
      if (userInputArr.includes(String(this.randomNum[index]))) {
        return false;
      }
    }
    return true;
  }

  ball() {
    let count = 0;
    const userInputArr = [...this.inputNum];
    for (let index = 0; index < 3; index++) {
      if (
        userInputArr.includes(String(this.randomNum[index])) &&
        this.inputNum[index] != this.randomNum[index]
      ) {
        count++;
      }
    }
    return count;
  }

  strike() {
    let count = 0;
    for (let index = 0; index < 3; index++) {
      if (this.inputNum[index] == this.randomNum[index]) {
        count++;
      }
    }
    return count;
  }
}

const startGame = new App();
startGame.play();

module.exports = App;
