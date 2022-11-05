class App {
  printMessage(situation) {
    if (situation == "START")
      console.log("숫자 야구 게임을 시작합니다.\n");
    if (situation == "END")
      console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    if (situation == "CORRECT")
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n");
    if (situation == "GUIDE")
      console.log("숫자를 입력해주세요 : ");
  }

  play() {

  }
}

// module.exports = App;

//NOTE - App 클래스 내에서 모두 구현하는게 옳은걸까
// 클래스 외부 함수를 만드는게 나은걸까
// 일단 시작은 모두 내부 메소드로 작성하는 걸로 한다.