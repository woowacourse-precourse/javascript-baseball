const MissionUtils = require("@woowacourse/mission-utils");
const Game = require("./Game");
const Computer = require("./Computer");
const User = require("./User");

class App {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
  }

  start(computerNumber) {
    //사용자 숫자 입력
    MissionUtils.Console.readLine(Game.MESSAGE.INPUT, (userInput) => {
      //입력이 형식에 맞는지 유효성 검사
      const userNumber = this.user.makeUserNumber(userInput);
      const userInputValidation = this.user.validateInput(userNumber);
      if (userInputValidation === Game.NUMBER.FAIL) {
        throw new Error(Game.MESSAGE.ERROR);
      }

      //사용자가 입력한 숫자에 대한 결과 출력
      MissionUtils.Console.print(Game.ballCount(userNumber, computerNumber));

      //컴퓨터가 선택한 숫자 3개 모두 맞출 시 게임 종료 문구 출력 후 게임 종료
      if (Game.ballCount(userNumber, computerNumber) === Game.MESSAGE.OUT) {
        return this.end();
      }
      if (Game.ballCount(userNumber, computerNumber) !== Game.MESSAGE.OUT) {
        return this.start();
      }
    });

    //사용자 재시작/ 종료 선택
  }

  end() {
    MissionUtils.Console.print(Game.MESSAGE.END);
    MissionUtils.Console.print(Game.MESSAGE.SELECT);
  }

  restart() {}

  exit() {}

  playBall() {
    MissionUtils.Console.print(Game.MESSAGE.START);
    const computerNumber = this.computer.makeRandomNumber();
    this.start(computerNumber);
  }
}

const numberbaseball = new App();
numberbaseball.playBall();

module.exports = App;
