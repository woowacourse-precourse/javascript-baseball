const MissionUtils = require("@woowacourse/mission-utils");

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
    this.startPrint();
  }
  // - 랜덤 3자리 생성하는 기능
  createAnwser() {}

  startPrint() {
    MissionUtils.Console.print(ment.start);
    MissionUtils.Console.close();
    return;
  }
  // - 사용자 입력을 받는 기능
  inputUserAnwser() {}
  // - 입력 예외처리 하는 기능 ( 게임 진행 중 )
  checkUserGameAnwser() {}
  // - 입력값과 컴퓨터 값을 비교하는 기능
  compareUserAnwser() {}
  // - 결과를 출력하는 기능
  resultPrint() {}
  // - 결과에 따라 다른 기능을 호출하는 기능
  //   1. 사용자 입력을 받는 기능으로 돌아가기
  //   2. 사용자 질문을 받는 기능
  // - 사용자 입력 예외처리하는 기능 ( 게임 진행 완료 후 )
  checkUserProgressInput() {}
  // - 종료 멘트 날리는 기능
  endGamePrint() {}
}

const app = new App();
app.play();

module.exports = App;
