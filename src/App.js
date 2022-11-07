const MissionUtils = require("@woowacourse/mission-utils");
const {
  Console: { readLine, print, close },
  Random,
} = MissionUtils;
const inputValidation = require("./validation/inputValidation");
const outputValidation = require("./validation/outputValidation");

class App {
  constructor(inputNum, randomNum) {
    this.inputNum = inputNum;
    this.randomNum = randomNum;
  }

  play() {
    this.randomNumber();
    this.userInput();
  }

  userInput() {
    readLine("숫자를 입력해주세요 : ", (input) => {
      this.inputNum = input;
      if (!this.checkInputValidation()) {
        throw "잘못된 값을 입력하셨습니다.";
      }
      print(input);
      close();
    });
  }

  checkInputValidation() {
    const checkNoOverlap = inputValidation.checkNoOverlap(this.inputNum);
    const checkOnlyNum = inputValidation.checkOnlyNum(this.inputNum);
    const checkTreeNum = inputValidation.checkThreeNum(this.inputNum);
    print(checkNoOverlap);
    print(checkOnlyNum);
    print(checkTreeNum);
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

  // 숫자 야구 게임 logic
  nothing() {
    for (let index = 0; index < 3; index++) {
      this.inputNum[index] == this.randomNum[index];
      return false;
    }
    return true;
  }

  ball() {
    userInputArr = [...this.inputNum];
    if()
  }

  strike() {
    let count;
    for(let index=0; index<3;index++){
      if(this.inputNum[index] == this.randomNum){
        count ++;
      }
    }
    return count;
  }
}

const startGame = new App();
startGame.play();

module.exports = App;
