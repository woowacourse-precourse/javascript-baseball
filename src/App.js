const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
class App {
  constructor() {
    this.randomNumber = [];
    this.userInput = "";
  }
  /**
   * 서로 다른 3 수
   */
  createRandomNumber() {
    this.randomNumber = [...Array(3)].map(() => Random.pickNumberInRange(1, 9));
    while (!this.handleDuplicateNumber(this.randomNumber)) {
      this.randomNumber = [...Array(3)].map(() =>
        Random.pickNumberInRange(1, 9)
      );
    }
    this.userInput = this.getUserInput();
  }
  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (ans) => {
      if (!this.handleDuplicateNumber(ans)) throw "exception";
      if (this.handleUserNumException(ans)) {
        this.userInput = ans.split("").map((v) => +v);
        this.chekUserInput();
      }
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
          ans = this.handleGameEndException(ans);
          if (ans === 1) {
            this.play();
          } else if (ans === 2) {
            Console.print("게임 종료");
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
   * throw 후 애플리케이션 종료
   */
  handleGameEndException(ans) {
    if (ans.length !== 1) throw "exception1";
    let ansAscii = ans.charCodeAt(0);
    if (ansAscii === 49 || ansAscii === 50) {
      return Number(ans);
    } else {
      throw "exception1";
    }
  }
  //depth 확인
  handleUserNumException(ans) {
    if (ans.length !== 3) throw "exception2";
    else {
      for (let i = 0; i < ans.length; i++) {
        let ansAscii = ans.charCodeAt(i);
        if (ansAscii < 49 || ansAscii > 57) throw "exception3";
      }
    }
    return true;
  }
  handleDuplicateNumber(ans) {
    let ansSet = Array.from(new Set(ans));
    if (ansSet.length !== ans.length) return false;
    return true;
  }
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.createRandomNumber();
  }
}

const app = new App();
app.play();

// MissionUtils.Console.close();
//console close 시점 고려
module.exports = App;
