const MissionUtils = require("@woowacourse/mission-utils");

const gameStatus = {
  play: true,
  stop: false,
};

const ment = {
  start: "숫자 야구 게임을 시작합니다.",
  end: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  reStart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  input: "숫자를 입력해주세요 : ",
  ball: "볼",
  strike: "스트라이크",
  nothing: "낫싱",
  exception: "잘못된 숫자를 입력하셨습니다. 게임 종료",
};

class App {
  async play() {
    this.game = gameStatus.play;

    const anwser = this.startGame().createAnswer();

    while (this.game) {
      await this.inputUserAnswer();
      if (this.checkUserGameAnswer()) this.exceptionEnd();
      this.compareUserAnswer(anwser);
    }

    if (this.game) this.endGame();
  }

  createAnswer() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  startGame() {
    MissionUtils.Console.print(ment.start);
    return this;
  }

  inputUserAnswer() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(ment.input, (answer) => {
        this.userAnswer = answer;
        resolve();
      });
    });
  }

  checkUserGameAnswer() {
    if (typeof this.userAnswer !== "number") return true;
    if (this.userAnswer < 100 || this.userAnswer > 999) return true;
    return false;
  }

  // - 입력값과 컴퓨터 값을 비교하는 기능
  compareUserAnswer(answer) {
    MissionUtils.Console.print(answer, this.userAnswer);
  }

  // - 결과를 출력하는 기능
  resultPrint(ball = 0, strike = 0) {}
  // - 결과에 따라 다른 기능을 호출하는 기능
  //   1. 사용자 입력을 받는 기능으로 돌아가기
  //   2. 사용자 질문을 받는 기능
  // - 사용자 입력 예외처리하는 기능 ( 게임 진행 완료 후 )
  checkUserProgressInput() {}

  exceptionEnd() {
    this.game = gameStatus.stop;
    MissionUtils.Console.print(ment.exception);
    MissionUtils.Console.close();
    return;
  }

  endGame() {
    this.game = gameStatus.stop;
    MissionUtils.Console.print(ment.end);
    MissionUtils.Console.close();
    return;
  }
}

const app = new App();
app.play();

module.exports = App;
