const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
class App {
  constructor() {
    this.randomNumber = [];
    this.userInput = "";
  }
  createRandomNumber() {
    this.randomNumber = [...Array(3)].map(() => Random.pickNumberInRange(1, 9));
    this.userInput = this.getUserInput();
  }
  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (ans) => {
      this.userInput = ans.split("").map((v) => +v);
      this.chekUserInput();
    });
  }
  chekUserInput() {
    this.strikeCount = 0;
    this.ballCount = 0;
    for (let i = 0; i < 3; i++) {
      if (this.randomNumber[i] === this.userInput[i]) this.strikeCount++;
      if (this.randomNumber.includes(this.userInput[i])) this.ballCount++;
    }
    this.ballCount -= this.strikeCount;
    this.printGameResult();
  }
  printGameResult() {
    Console.print(this.getResultString());
    if (this.strikeCount === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
        (ans) => {
          Console.print(typeof ans);
          ans = Number(ans);
          if (ans === 1) {
            this.play();
          } else if (ans === 2) {
            Console.close();
          } //1 or 2 제외 다른 거 입력했을 때 생각.
        }
      );
    } else {
      this.getUserInput();
    }
  }
  getResultString() {
    let ballString = this.ballCount > 0 ? `${this.ballCount}볼 ` : ``;
    let strikeString =
      this.strikeCount > 0 ? `${this.strikeCount}스트라이크` : ``;
    if (ballString.length === 0 && strikeString.length === 0) return "낫싱";
    return ballString + strikeString;
  }
  /**
   * 사용자 입력이 3자리이고, 모두 숫자일때(아스키코드)
   * 정답 맞췄을 때, 입력 숫자가 1자리이고, 숫자일 때
   */
  handleGameEndException(ans) {
    let ansAscii = ans.charCodeAt(0);
    if (ansAscii === 49 || ansAscii === 48) {
      return Number(ans);
    }
    throw "exception";
  }
  handleUserNumException() {}
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.createRandomNumber();
  }
}

const app = new App();
app.play();

// MissionUtils.Console.close();

module.exports = App;
