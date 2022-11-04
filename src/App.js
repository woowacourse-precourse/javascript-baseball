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

    while (this.game) {
      this.startPrint();
      const anwser = this.createAnwser();
      console.log(anwser);

      this.endGamePrint();
    }
  }

  createAnwser() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  startPrint() {
    MissionUtils.Console.print(ment.start);
    MissionUtils.Console.close();
    return;
  }
  // - 사용자 입력을 받는 기능
  inputUserAnwser() {}

  // - 입력 예외처리 하는 기능 ( 게임 진행 중 )
  checkUserGameAnwser(anwser) {
    try {
      if (typeof anwser !== "number") throw new Error("Not number");
      if (anwser < 100 || anwser > 999) throw new Error("Out of range");
    } catch (error) {
      return false;
    }
    return true;
  }
  // - 입력값과 컴퓨터 값을 비교하는 기능
  compareUserAnwser() {}
  // - 결과를 출력하는 기능
  resultPrint(ball = 0, strike = 0) {}
  // - 결과에 따라 다른 기능을 호출하는 기능
  //   1. 사용자 입력을 받는 기능으로 돌아가기
  //   2. 사용자 질문을 받는 기능
  // - 사용자 입력 예외처리하는 기능 ( 게임 진행 완료 후 )
  checkUserProgressInput() {}

  endGamePrint() {
    this.game = gameStatus.stop;
    MissionUtils.Console.print(ment.end);
    MissionUtils.Console.close();
    return;
  }
}

const app = new App();
app.play();

module.exports = App;
