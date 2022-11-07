const { Console, Random } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

class App {
  constructor() {
    this.computerRandomNumber = "";
  }

  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      const validation = new Validation(userInput);
      if (validation.isValidInput()) {
        this.doGame(userInput);
      }
    });
  }

  doGame(userInput) {
    let strikeCount = 0;
    let ballCount = 0;
    for (let idx = 0; idx < 3; idx += 1) {
      if (this.computerRandomNumber[idx] === userInput[idx]) strikeCount += 1;
      else if (userInput.includes(this.computerRandomNumber[idx])) {
        ballCount += 1;
      }
    }
    const result = { strikeCount, ballCount };
    this.checkGameResult(result);
  }

  static printGameResult(strikeCnt, ballCnt) {
    if (strikeCnt === 0 && ballCnt === 0) return Console.print("낫싱");
    const strike = strikeCnt === 0 ? "" : `${strikeCnt}스트라이크`;
    const ball = ballCnt === 0 ? "" : `${ballCnt}볼 `;
    return Console.print(`${ball}${strike}`);
  }

  askRestart() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (restart) => {
        if (restart === "1") this.gameStart();
        else Console.close();
      }
    );
  }

  checkGameResult(result) {
    const { strikeCount, ballCount } = result;
    App.printGameResult(strikeCount, ballCount);
    if (strikeCount !== 3) this.getUserInput();
    else this.askRestart();
  }

  makeComputerNumber() {
    const numberArray = [];
    while (numberArray.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numberArray.includes(number)) {
        numberArray.push(number);
      }
    }
    this.computerRandomNumber = numberArray.join("");
  }

  gameStart() {
    this.makeComputerNumber();
    this.getUserInput();
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }
}

module.exports = App;
