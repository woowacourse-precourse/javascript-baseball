const { Console } = require("@woowacourse/mission-utils");
const countBallAndStrike = require("./utils/countBallAndStrike");
const makeRandomNumber = require("./utils/makeRandomNumber");
const printGameMessage = require("./utils/printGameMessage");
const verifyInputNumber = require("./utils/verifyInputNumber");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.gamePrepare();
  }

  gamePrepare() {
    const randomNum = makeRandomNumber();
    this.gameStart(randomNum.toString());
  }

  gameStart(answer) {
    Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
      // 사용자 입력값 유효 여부 확인
      if (!verifyInputNumber(userNumber)) {
        this.inputErrorException();
      }

      const userResult = countBallAndStrike(userNumber, answer); // 볼 스트라이크 개수 세기
      printGameMessage(userResult.strike, userResult.ball); // 볼 스트라이크 출력

      if (userResult.strike < 3) {
        return this.gameStart(answer);
      }

      this.gameRestartCheck();
    });
  }

  inputErrorException() {
    throw new Error("잘못된 값을 입력하셨습니다! 게임이 종료됩니다.");
  }

  // 게임 재시작 여부 입력
  gameRestartCheck() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (userInput) => {
        if (userInput === "1") return this.gamePrepare();
        else if (userInput === "2") return Console.close();
        return this.inputErrorException();
      }
    );
  }
}

const check = new App();
check.play();

module.exports = App;
