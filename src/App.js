const MissionUtils = require("@woowacourse/mission-utils");

class App {
  answer = []
  userNumber = []

  play() {}

  createAnswer() {
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  userInputAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      this.userNumber = inputNumber.split("").map(num => Number(num));
      MissionUtils.Console.close();
    })
    this.inputAnswerException()
  }

  inputAnswerException()
}

const baseBallGame = new App;
baseBallGame.play();

module.exports = App;
