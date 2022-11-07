const MissionUtils = require("@woowacourse/mission-utils");
const Game = require("./Game");
const Computer = require("./Computer");

class App {
  constructor() {
    this.computer = new Computer();
  }

  start() {
    const computerNumber = this.computer.makeRandomNumber();

    //사용자 숫자 입력
    MissionUtils.Console.readLine(Game.MESSAGE.INPUT, (userInput) => {
      //입력이 형식에 맞는지 유효성 검사
    });

    //사용자가 입력한 숫자에 대한 결과 출력

    //컴퓨터가 선택한 숫자 3개 모두 맞출 시 게임 종료 문구 출력 후 게임 종료

    //사용자 재시작/ 종료 선택
  }

  restart() {}

  exit() {}

  playBall() {
    MissionUtils.Console.print(Game.MESSAGE.START);
    this.start();
  }
}

const numberbaseball = new App();
numberbaseball.playBall();

module.exports = App;
