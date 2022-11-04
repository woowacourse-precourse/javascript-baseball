const { ERROR, RESULT, MESSAGE } = require("./constant");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print(MESSAGE.START_GAME);
    const computerNumbers = this.generateComputerNumbers();
    this.startGame(computerNumbers);
  }

  startGame(computerInput) {
    MissionUtils.Console.readLine(MESSAGE.INSERT_NUMBER, (userInput) => {
      if (this.checkInputValidation(userInput)) {
        const computedResult = this.compute(computerInput, userInput);
        MissionUtils.Console.print(computedResult);
        const isFinished = this.isGameFinished(strikes);
        MissionUtils.Console.print(result);
        isFinished ? this.restartOrExitGame() : this.startGame(computerInput);
      } else {
        throw ERROR.WRONG_INPUT;
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
    if (strike === 0 && ball === 0) return RESULT.NOTHING;
    if (strike === 3)
      return `${strike}` + RESULT.STRIKE + `\n` + RESULT.GAME_END;
    if (ball === 0) return `${strike + RESULT.STRIKE}`;
    if (strike === 0) return `${ball + RESULT.BALL}`;
    return `${ball + RESULT.BALL} ${strike + RESULT.STRIKE}`;
  }

  compute(computerInput, userInput) {
    const strikes = this.countStrikes(computerInput, userInput);
    const balls = this.countBalls(computerInput, userInput);
    const result = this.showResult(strikes, balls);
    return result;
  }

  restartOrExitGame() {
    MissionUtils.Console.readLine(MESSAGE.START_OR_EXIT, (userSelection) => {
      if (userSelection === "1") {
        const newComputerNumbers = this.generateComputerNumbers();
        this.startGame(newComputerNumbers);
      }
      if (userSelection === "2") {
        MissionUtils.Console.close();
      }
      if (userSelection !== "1" && userSelection !== "2") {
        throw RROR.WRONG_SELECTION;
      }
    });
  }
  isGameFinished(strike) {
    return strike === 3;
  }
}

//const app = new App();
//app.play();

module.exports = App;
