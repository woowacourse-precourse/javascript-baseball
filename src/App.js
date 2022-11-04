class App {
  //   - 게임 진행을 하는 기능 - play
  play() {}
  // - 랜덤 3자리 생성하는 기능
  createAnwser() {}
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

module.exports = App;
