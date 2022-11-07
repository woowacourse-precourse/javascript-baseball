const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class App {
  constructor() {
    this._computer = new Computer();
    /* new Controller */
    this.MESSAGE = {
      START : "숫자 야구 게임을 시작합니다.",
      USER_ANSWER : "숫자를 입력해주세요 : ",
      GAME_OVER : "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      USER_SELECT : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    }
  }

  play() {
    Console.print(this.MESSAGE.START);
    this.start();
  }

  start() {
    this.getUserInput();
  }

  getUserAnswer() {
    /** readline -> question으로 구현되어 있어 한번 input 받은 후 pause 
     *  따라서 callback으로 계속 실행될 수 있도록 구현해야 할 것 같다. 
     */
    Console.readLine(this.MESSAGE.USER_ANSWER, function (input) {
      /* 입력을 배열 형태로 쪼갬 */
      /* Controller에서 유효성 검사 */
      /* 유효하다면 Controller에서 정답 판별 */
      /* 정답이라면 게임 재시작 or 게임 종료 여부를 유저에게 질문 */ 
    });
  }

  restart() {
    this._computer.answer = this._computer.makeAnswer();
    this.start();
  }

  finish() {
    Console.close();
  }

  splitInput(input) {
    return input.split('').map(function (number) {
      return Number(number);
    });
  }
}

module.exports = App;
