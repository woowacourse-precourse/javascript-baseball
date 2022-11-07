const { Console, Random } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

class App {
  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      const validation = new Validation(userInput);
      if (validation.isValidInput()) {
        return userInput;
      }
    });
  }

  doGame(computerRandomNumber) {
    const userNumber = this.getUserInput();
    let strikeCount = 0;
    let ballCount = 0;
    for (let idx = 0; idx < 3; i++) {
      if (computerRandomNumber[idx] === userNumber[idx]) strikeCount++;
      else if (userNumber.includes(computerRandomNumber[idx])) {
        ballCount += 1;
      }
    }
    return { strikeCount, ballCount };
  }

  printGameResult(strikeCount, ballCount) {
    if (strikeCount === 0 && ballCount === 0) return Console.print("낫싱");
    const strikeCount = strikeCount === 0 ? "" : `${strikeCount}스트라이크`;
    const ballCount = ballCount === 0 ? "" : `${ballCount}볼 `;
    return Console.print(`${ballCount}${strikeCount}`);
  }

  askRestart() {}

  checkGameResult(result) {
    const { strikeCount, ballCount } = result;
    this.printGameResult(strikeCount, ballCount);
    if (strikeCount !== 3) return this.doGame();
    return this.askRestart();
  }

  gameStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computerRandomNumber = Random.pickUniqueNumbersInRange(1, 9, 3).join(
      ""
    );
    const result = this.doGame(computerRandomNumber);
    this.checkGameResult(result);
  }

  play() {
    gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
