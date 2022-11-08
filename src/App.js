const MissionUtils = require("@woowacourse/mission-utils");
const getRandomNumbers = require("./getRandomNumbers");
const userErrorCheck = require("./errorCheck");

class App {

  constructor() {
    this.firstEnter = true;
    this.computer = getRandomNumbers();
  }

  userAnswer() {
    MissionUtils.Console.readLine(OUTPUT_MESSAGE.ENTER_NUMBER, (answer) => {
      userErrorCheck(answer);
      if (this.printOutput(answer) === OUTPUT_MESSAGE.CORRECT_ANSWER) {
        MissionUtils.Console.print(this.printOutput(answer));
        // this.restart();
        // 다시 시작할지 물어보는 기능
        return;
      }
      MissionUtils.Console.print(this.printOutput(answer));
      this.userAnswer();
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