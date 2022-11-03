const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.isCorrect = false;
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame(this.generateComputerNumbers());
  }

  startGame(computerInput) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      if (this.checkInputValidation(userInput)) {
        const strikes = this.countStrikes(computerInput, userInput);
        const balls = this.countBalls(computerInput, userInput);
        const result = this.showResult(strikes, balls);
        MissionUtils.Console.print(result);
        if (this.isCorrect) {
          this.restartOrExitGame();
        } else {
          this.startGame(computerInput);
        }
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

  showResult(strike, ball) {
    if (strike === 0 && ball === 0) return "낫싱";
    if (strike === 3) {
      this.isCorrect = true;
      return (
        `${strike}스트라이크 \n` + "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
    }
    if (ball === 0) return `${strike}스트라이크`;
    if (strike === 0) return `${ball}볼`;
    return `${ball}볼 ${strike}스트라이크`;
  }

  restartOrExitGame() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
      (userSelection) => {
        if (userSelection === "1") {
          this.isCorrect = false;
          this.startGame(this.generateComputerNumbers());
        }
        if (userSelection === "2") {
          MissionUtils.Console.close();
        }
        if (userSelection !== "1" && userSelection !== "2") {
          throw "1 또는 2만 입력 가능";
        }
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
