const { Console } = require("@woowacourse/mission-utils");

const GAME_START_SENTENCE = '숫자 야구 게임을 시작합니다.';
const GET_USER_NUMBER_SENTENCE = '숫자를 입력해주세요 : ';
const GAME_END_SENTENCE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const GAME_RESTART_SENTENCE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';

class App {
  getUserNumber() {
    Console.readLine(GET_USER_NUMBER_SENTENCE, (userNumber) => {
      Console.print(userNumber);
      Console.close();
    })
  }

  play() {
    this.getUserNumber();
  }
}

module.exports = App;
