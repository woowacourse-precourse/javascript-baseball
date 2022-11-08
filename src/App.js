const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/constants");
const makeRandomNumber = require("./utils/randomNumber");
const { validNumber } = require("./utils/checkInputNumber");

class App {
  play() {
    //시작 메세지 출력하기!
    Console.print(MESSAGE.START);
    this.gameSetter();
  }
  //램덤 숫자(답) 미리 구하기!
  gameSetter() {
    const anwer = makeRandomNumber.createRandomNumber();
    this.startGame(anwer);
  }
  startGame() {
    Console.readLine(MESSAGE.INPUT, (input) => {
      //사용자 입력한 값의 유효 여부를 먼저 확인한다
      if (!validNumber(input)) this.inputException();
      else {
      }
    });
  }

  inputException() {
    throw new Error(MESSAGE.WRONG_INPUT);
  }
}
const app = new App();
app.play();
module.exports = App;
