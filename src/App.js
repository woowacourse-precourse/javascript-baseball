const MissionUtils = require("@woowacourse/mission-utils");
const getRandomNumbers = require("./getRandomNumbers");
const { userErrorCheck, restartErrorCheck } = require("./errorCheck");
const compareNumbers = require("./compareNumbers");

const { OUTPUT_MESSAGE } = require('./constantValue');

class App {
  constructor() {
  }

  userAnswer() {
    MissionUtils.Console.readLine(OUTPUT_MESSAGE.ENTER_NUMBER, (answer) => {
      userErrorCheck(answer);
      if (this.printOutput(answer) === OUTPUT_MESSAGE.CORRECT_ANSWER) {
        MissionUtils.Console.print(this.printOutput(answer));
        this.printRestart();
        return;
      }
      MissionUtils.Console.print(this.printOutput(answer));
      this.userAnswer();
    });
  }

  printRestart() {
    MissionUtils.Console.readLine(OUTPUT_MESSAGE.RESTART_ENTER_NUMBER, (answer) => {
      restartErrorCheck(answer);
      if (answer === '1') {
        this.play();
        return;
      }
      MissionUtils.Console.close();
    });
  }

  printOutput(answer) {
    let strike = 0;
    let ball = 0;

    answer.split('').forEach((number, index) => {
      const randomNumbers = String(this.randomNumbers[index]);
      if (randomNumbers === number) {
        strike += 1;
      }
      if (randomNumbers !== number && String(this.randomNumbers).includes(number)) {
        ball += 1;
      }
    });

    return compareNumbers(strike, ball);
  }

  play() {
    if (this.firstGame) {
      MissionUtils.Console.print(OUTPUT_MESSAGE.START_GAME);
      this.firstGame = false;
    }
    this.randomNumbers = getRandomNumbers();
    this.userAnswer();
  }
}


module.exports = App;