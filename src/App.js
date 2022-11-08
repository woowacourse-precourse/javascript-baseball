const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, NUMBER } = require("./Game");
const Computer = require("./Computer");
const User = require("./User");
const Referee = require("./Referee");

class App {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
    this.referee = new Referee();
  }

  playBall() {
    MissionUtils.Console.print(MESSAGE.START);
    this.play();
  }

  play() {
    const computerNumber = this.computer.makeRandomNumber();
    this.start(computerNumber);
  }

  start(computerNumber) {
    console.log("정답", computerNumber);
    MissionUtils.Console.readLine(MESSAGE.INPUT, (userInput) => {
      //입력이 형식에 맞는지 유효성 검사
      const userNumber = this.user.makeUserNumber(userInput);
      const userInputValidation = this.user.validateInput(userNumber);

      if (userInputValidation === false) {
        throw new Error(MESSAGE.ERROR);
      }

      //사용자가 입력한 숫자에 대한 결과 출력
      MissionUtils.Console.print(
        this.referee.ballCount(userNumber, computerNumber)
      );

      //컴퓨터가 선택한 숫자 3개 모두 맞출 시 게임 종료 문구 출력 후 게임 종료
      if (this.referee.ballCount(userNumber, computerNumber) === MESSAGE.OUT)
        this.end();
      if (this.referee.ballCount(userNumber, computerNumber) !== MESSAGE.OUT)
        this.start(computerNumber);
    });
  }

  restart() {
    this.play();
  }

  exit() {
    MissionUtils.Console.close();
  }
  //사용자 재시작/ 종료 선택
  end() {
    MissionUtils.Console.print(MESSAGE.END);
    MissionUtils.Console.readLine(MESSAGE.SELECT, (userInput) => {
      const userNumber = Number(userInput);

      if (userNumber === NUMBER.RESTART) this.restart();
      if (userNumber === NUMBER.EXIT) this.exit();
    });
  }
  // throwError(errorMessage) {
  // throw new Error(errorMessage);
  // }
}

const numberbaseball = new App();
numberbaseball.playBall();

module.exports = App;
