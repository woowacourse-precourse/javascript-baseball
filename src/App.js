const MissionUtils = require("@woowacourse/mission-utils");
const getRandomNumbers = require("./getRandomNumbers");
const { userErrorCheck, restartErrorCheck } = require("./errorCheck");

const { OUTPUT_MESSAGE } = require('./constant');

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
      const computer = String(this.computer[index]);
      if (computer === number) {
        strike += 1;
      }
      if (computer !== number && String(this.computer).includes(number)) {
        ball += 1;
      }
    });


    return compareNumbers(strike, ball);
  }

  play() { }
}


module.exports = App;