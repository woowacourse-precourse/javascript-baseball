const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, GAME_PROGRESS, ANSWER_LENGTH } = require("./constants/constants");
const countBallAndStrike = require("./utils/countBallAndStrike");
const makeRandomNumber = require("./utils/makeRandomNumber");
const printGameMessage = require("./utils/printGameMessage");
const verifyInputNumber = require("./utils/verifyInputNumber");

class App {
  play() {
    Console.print(MESSAGE.START_GAME);
    this.gamePrepare();
  }

  // 게임 준비 (정답 준비)
  gamePrepare() {
    const randomNum = makeRandomNumber();
    this.gameStart(randomNum);
  }

  // 게임 시작
  gameStart(answer) {
    Console.readLine(MESSAGE.INPUT_NUMBER, (userNumber) => {
      // 사용자 입력값 유효 여부 확인
      if (!verifyInputNumber(userNumber)) {
        this.inputErrorException();
      }
      const userResult = countBallAndStrike(userNumber, answer); // 볼 스트라이크 개수 세기
      printGameMessage(userResult.strike, userResult.ball); // 볼 스트라이크 출력
      if (userResult.strike < ANSWER_LENGTH) {
        return this.gameStart(answer);
      }
      this.gameRestartCheck();
    });
  }

  // 게임 재시작 여부 입력
  gameRestartCheck() {
    Console.print(MESSAGE.STRIKE_OUT);
    Console.readLine(MESSAGE.RESTART_OR_TERMINATE, (userInput) => {
      if (userInput === GAME_PROGRESS.RESTART) return this.gamePrepare();
      else if (userInput === GAME_PROGRESS.TERMINATE) return Console.close();
      return this.inputErrorException();
    });
  }

  // 예외 발생으로 인한 종료
  inputErrorException() {
    throw new Error(MESSAGE.INPUT_EXCEPTION);
  }
}

const check = new App();
check.play();

module.exports = App;
