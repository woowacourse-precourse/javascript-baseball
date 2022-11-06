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
  play() {
    this.game = gameStatus.play;

    const anwser = this.startGame().createAnwser();
    //정답
    console.log(anwser);

    this.inputUserAnwser();
    if (this.checkUserGameAnwser()) this.compareUserAnwser();

    // while (this.game) {}

    if (!this.game) this.endGame();
  }

  createAnwser() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  startGame() {
    MissionUtils.Console.print(ment.start);
    return this;
  }

  // - 사용자 입력을 받는 기능
  inputUserAnwser() {
    MissionUtils.Console.readLine(ment.input, (answer) => {
      this.userAnwser = answer;
    });
  }

  checkUserGameAnwser() {
    if (typeof this.userAnwser !== "number") return false;
    if (this.userAnwser < 100 || this.userAnwser > 999) return false;
    return true;
  }

  // - 입력값과 컴퓨터 값을 비교하는 기능
  compareUserAnwser(user, answer) {}
  // - 결과를 출력하는 기능
  resultPrint(ball = 0, strike = 0) {}
  // - 결과에 따라 다른 기능을 호출하는 기능
  //   1. 사용자 입력을 받는 기능으로 돌아가기
  //   2. 사용자 질문을 받는 기능
  // - 사용자 입력 예외처리하는 기능 ( 게임 진행 완료 후 )
  checkUserProgressInput() {}

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
