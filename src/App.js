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

  inputAnswerException() {
    try {
      if (this.userNumber.length !== 3) {
        throw new Error
      }
      if (this.userNumber[0] === this.userNumber[1] ||
          this.userNumber[0] === this.userNumber[2] ||
          this.userNumber[1] === this.userNumber[2]) {
        throw new Error
      }
      if (isNaN(this.userNumber[0]) || this.userNumber[0] === 0 ||
          isNaN(this.userNumber[1]) || this.userNumber[1] === 0 ||
          isNaN(this.userNumber[2]) || this.userNumber[2] === 0) {
        throw new Error
      }
      answerCompare()
    } catch {
      gameEnd()
    }
  }
}

const baseBallGame = new App;
baseBallGame.play();

module.exports = App;
