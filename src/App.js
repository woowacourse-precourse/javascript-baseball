const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/constants");
const makeRandomNumber = require("./utils/randomNumber");
const { validNumber } = require("./utils/checkInputNumber");
const { countStrikeAndBall } = require("./utils/countStrikeAndBall");

class App {
  play() {
    //시작 메세지 출력하기!
    Console.print(MESSAGE.START);
    this.gameSetter();
  }
  //램덤 숫자(답) 미리 구하기!
  gameSetter() {
    const answer = makeRandomNumber.createRandomNumber();
    this.startGame(answer);
  }
  startGame(answer) {
    Console.readLine(MESSAGE.INPUT, (input) => {
      //사용자 입력한 값의 유효 여부를 먼저 확인한다
      if (!validNumber(input)) this.inputException();
      else {
        //유효한 값을 입력했을 경우 결과값을 출력한다!
        const countResult = countStrikeAndBall(answer, input);
        //countResult[0]은 항상 strike의 갯수를 담고 있다
        if (countResult[0] === 3) {
          Console.print(MESSAGE.CORRECT);
        }
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
