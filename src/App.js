const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/constants");
const makeRandomNumber = require("./utils/randomNumber");
const { validNumber } = require("./utils/checkInputNumber");
const { countStrikeAndBall } = require("./utils/countStrikeAndBall");
const { printResult } = require("./utils/printResult");
const { CONTINUE_OR_NOT } = require("./constant/constants");
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
        Console.print(countResult);
        if (countResult.strike === 3) {
          Console.print(MESSAGE.CORRECT);
          //게임을 계속할 것인지, 아니면 종료할 것인지 결정!
          this.continueOrNot();
        } else {
          printResult(countResult.strike, countResult.ball);
          this.startGame(answer);
        }
      }
    });
  }
  continueOrNot() {
    Console.readLine(MESSAGE.CONTINUE, (input) => {
      Console.print(CONTINUE_OR_NOT);
      if (input === CONTINUE_OR_NOT.CONTINUE) {
        return this.gameSetter();
      } else if (input === CONTINUE_OR_NOT.TERMINATE) {
        return Console.close();
      }
    });
  }
  inputException() {
    throw new Error(MESSAGE.WRONG_INPUT);
  }
}

module.exports = App;
