const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerInput = 0;
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.computerInput = this.generateComputerNumbers();
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      if (this.checkInputValidation(userInput)) {
        MissionUtils.Console.print(userInput);
        const strikes = this.countStrikes(this.computerInput, userInput);
        const balls = this.countBalls(this.computerInput, userInput);
      } else {
        throw "잘못된 입력입니다.";
      }
    });
  }

  checkInputValidation(userInputs) {
    if (userInputs.length !== 3) return false;
    if (new Set(userInputs).size !== 3) return false;
    if (userInputs.includes(0)) return false;
    if (Number.isNaN(Number(userInputs))) return false;
    return true;
  }

  generateComputerNumbers() {
    let computerArray = [];
    while (new Set(computerArray).size < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerArray.includes(randomNumber)) {
        computerArray.push(randomNumber);
      }
    }
    return computerArray;
  }

  countStrikes(computerInputs, userInputs) {
    let totalStrike = computerInputs.reduce((count, currentValue, index) => {
      const userInputNumber = Number(userInputs[index]);
      if (userInputNumber === currentValue) return count + 1;
      else return count;
    }, 0);
    return totalStrike;
  }

  countBalls(computerInputs, userInputs) {
    let totalBall = computerInputs.reduce((count, currentValue, index) => {
      const userInputNumber = Number(userInputs[index]);
      if (userInputNumber !== currentValue && userInputs.includes(currentValue))
        return count + 1;
      else return count;
    }, 0);
    return totalBall;
  }
}

const app = new App();
app.play();

module.exports = App;
