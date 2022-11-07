const { Console } = require("@woowacourse/mission-utils");
const BaseballGame = require("./BaseballGame");
class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    new BaseballGame();
  }
}
const app = new App();
app.play();
module.exports = App;
<<<<<<< HEAD
=======
// 게임 시작 함수
// 랜덤으로 서로 다른 숫자 3개 골라 놓기 함수
// 사용자 입력 함수
// 사용자와 랜덤 비교 함수
/*
숫자 야구 게임을 시작합니다.
숫자를 입력해주세요 : 123
1볼 1스트라이크
숫자를 입력해주세요 : 145
1볼
숫자를 입력해주세요 : 671
2볼
숫자를 입력해주세요 : 216
1스트라이크
숫자를 입력해주세요 : 713
3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
*/
>>>>>>> 51b99cc... 플레이어 숫자, 컴퓨터 숫자 받아오기 완료, 숫자 비교하기 함수 구현 예정
