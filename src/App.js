const MissionUtils = require("@woowacourse/mission-utils");

class App {
  answer = [];
  userNumber = [];
  ballCount = 0;
  strikeCount = 0;
  selectNumber = 0;

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
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputAnswer) => {
      this.userNumber = inputAnswer.split("").map(num => Number(num));
      MissionUtils.Console.close();
    })
    this.inputAnswerException()
  }

  inputAnswerException() {
    try {
      if (this.userNumber.length !== 3) {
        throw new Error;
      }
      if (this.userNumber[0] === this.userNumber[1] ||
          this.userNumber[0] === this.userNumber[2] ||
          this.userNumber[1] === this.userNumber[2]) {
        throw new Error;
      }
      if (isNaN(this.userNumber[0]) || this.userNumber[0] === 0 ||
          isNaN(this.userNumber[1]) || this.userNumber[1] === 0 ||
          isNaN(this.userNumber[2]) || this.userNumber[2] === 0) {
        throw new Error;
      }
      this.answerCompare();
    } catch {
      this.gameEnd();
    }
  }

  answerCompare() {
    this.getHint();
    if (this.userNumber.toString() === this.answer.toString()) {
      this.gameWin();
    }
  }

  getHint() {
    this.getBall();
    this.getStrike();

    if (this.ballCount > 0 && this.strikeCount > 0) {
      return MissionUtils.Console.print(`${this.ballCount}볼 ${this.strikeCount}스트라이크`);
    } else if (this.ballCount > 0) {
      return MissionUtils.Console.print(`${this.ballCount}볼`);
    } else if (this.strikeCount > 0) {
      return MissionUtils.Console.print(`${this.strikeCount}스트라이크`);
    } else {
      return MissionUtils.Console.print(`낫싱`);
    }
  }

  getBall() {
    this.ballCount = 0;
    
    for (let idx = 0; idx < this.answer.length; idx++) {
      if (this.userNumber[idx] !== this.answer[idx] &&
          this.answer.includes(this.userNumber[idx])) {
        this.ballCount++;
      }
    }
  }

  getStrike() {
    this.strikeCount = 0;

    for (let idx = 0; idx < this.answer.length; idx++) {
      if (this.userNumber[idx] === this.answer[idx]) {
        this.strikeCount++;
      }
    }
  }

  gameWin() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.gameSelect();
  }

  gameSelect() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (inputNumber) => {
      this.selectNumber = Number(inputNumber);
      MissionUtils.Console.close();
    })
    this.gameSelectException();
  }

  gameSeletException() {
    try {
      if (this.selectNumber !== 1 || this.selectNumber !== 2) {
        throw new Error;
      }
      if (this.selectNumber === 1) {
        this.startNewGame();
      }
      if (this.selectNumber === 2) {
        this.gameEnd();
      }
    } catch {
      this.gameEnd();
    }
  }
}

const baseBallGame = new App;
baseBallGame.play();

module.exports = App;
