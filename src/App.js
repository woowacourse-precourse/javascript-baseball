const MissionUtils = require("@woowacourse/mission-utils");

class App {
 
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
    this.selectNumber = 0;
  }

  play() {
    this.setComputerNumber();
    this.userInputNumber();
  }

  setComputerNumber() {
    this.computerNumber = [];
    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
    return this.computerNumber;
  }

  userInputNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      MissionUtils.Console.print(`숫자를 입력해주세요 : ${inputNumber}`);
      let inputNumberArr = inputNumber.split("").map(num => Number(num));
      this.userNumber = this.inputNumberException(inputNumberArr);
      this.numberCompare();
    })
    return this.userNumber;
  }

  inputNumberException(inputNumber) {
    if (inputNumber.length !== 3) {
      throw new Error;
    }
    if ([...new Set(inputNumber)].length !== 3) {
      throw new Error;
    }
    if (inputNumber.includes(NaN) || inputNumber.includes(0)) {
      throw new Error;
    }
    return inputNumber;
  }

  numberCompare() {
    this.getHint();
    if (this.computerNumber.toString() === this.userNumber.toString()) {
      return this.gameWin();
    } else {
      this.userInputNumber();
    }
  }
 
  getHint() {
    let ball = this.getBall();
    let strike = this.getStrike();
    
    if (ball > 0 && strike > 0) {
      return MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (ball > 0) {
      return MissionUtils.Console.print(`${ball}볼`);
    } else if (strike > 0) {
      return MissionUtils.Console.print(`${strike}스트라이크`);
    } else {
      return MissionUtils.Console.print("낫싱");
    }
  }
  
  getBall() {
    let ballCount = 0;
    
    for (let idx = 0; idx < this.computerNumber.length; idx++) {
      if (this.userNumber[idx] !== this.computerNumber[idx] &&
        this.computerNumber.includes(this.userNumber[idx])) {
          ballCount++;
        }
      }
    return ballCount;
  }
  
  getStrike() {
    let strikeCount = 0;
    
    for (let idx = 0; idx < this.computerNumber.length; idx++) {
      if (this.userNumber[idx] === this.computerNumber[idx]) {
        strikeCount++;
      }
    }
    return strikeCount;
  }
  
  gameWin() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.userSelectNumber();
  }
  
  userSelectNumber() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (inputNumber) => {
      MissionUtils.Console.print(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n${inputNumber}`)
      this.selectNumber = this.userSeletException(Number(inputNumber));

      if (this.selectNumber === 1) {
        return this.startNewGame();
      }
      if (this.selectNumber === 2) {
        return this.gameEnd();
      }
    })
  }

  userSeletException(inputNumber) {
    if (inputNumber !== 1 && inputNumber !== 2) {
      throw new Error;
    }
    return inputNumber;  
  }
  
  startNewGame() {
    this.setComputerNumber();
    this.userInputNumber();
  }
  
  gameEnd() {
    MissionUtils.Console.print("게임 종료");
    MissionUtils.Console.close();
  }
}

const app = new App;
app.play();

module.exports = App;
