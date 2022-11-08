const MissionUtils = require("@woowacourse/mission-utils");
const inputValidation = require("./validation/inputValidation");

class App {
  constructor(inputNum, randomNum, overInputNum) {
    this.inputNum = inputNum;
    this.randomNum = randomNum;
    this.overInputNum = overInputNum;
  }

  play() {
    this.userInit();
    this.gameRoutine();
  }

  gameRoutine() {
    this.randomNumber();
    this.userInput();
  }

  // userInput logic
  userInit() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.inputNum = input;
      if (!this.checkInputValidation()) {
        throw new Error("잘못된 값을 입력하셨습니다.");
      }
      this.game();
      if (this.randomNum.join("") == this.inputNum) {
        this.overMessage();
        this.overChoice();
        return;
      } else this.userInput();
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
      const random = MissionUtils.Random.pickNumberInRange(1, 9);
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
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  overChoice() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        this.overInputNum = input;
        if (this.overInputNum == 1) {
          this.gameRoutine();
        } else if (this.overInputNum == 2) {
          MissionUtils.Console.close();
        } else {
          throw new Error("잘못된 값을 입력하셨습니다.");
        }
      }
    );
  }

  // 숫자 야구 게임 logic
  game() {
    let score = "";
    if (this.nothing()) {
      score += "낫싱";
    }
    if (!this.nothing() && this.ball() > 0) {
      score += `${this.ball()}볼 `;
    }
    if (!this.nothing() && this.strike() > 0) {
      score += `${this.strike()}스트라이크`;
    }
    MissionUtils.Console.print(score);
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
