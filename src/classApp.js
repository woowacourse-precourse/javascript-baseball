const MissionUtils = require("@woowacourse/mission-utils");

const { Random, Console } = MissionUtils;

class App {
  constructor() {
    this.answer = [];
    this.userInput = "";
  }
  getBall(includeOfNum) {
    let ballCnt = 0;
    [...this.userInput].forEach((num, idx) => {
      if (+num !== this.answer[idx] && includeOfNum[num]) {
        ballCnt += 1;
      }
    });

    return ballCnt;
  }

  getStrike() {
    let strikeCnt = 0;
    [...this.userInput].forEach((num, idx) => {
      if (+num === this.answer[idx]) {
        strikeCnt += 1;
      }
    });

    return strikeCnt;
  }

  createResult() {
    if (this.userInput === "") return "낫싱";
    const includeOfNum = Array.from({ length: 10 }).fill(false);
    let result = "";

    this.answer.forEach((num) => {
      includeOfNum[num] = true;
    });

    const ball = this.getBall(includeOfNum);
    const strike = this.getStrike();

    if (ball === 0 && strike === 0) return "낫싱";
    if (ball > 0) result += `${ball}볼`;
    if (ball > 0 && strike > 0) result += " ";
    if (strike > 0) result += `${strike}스트라이크`;

    return result;
  }

  checkException(inputNum, allowed) {
    if (inputNum.length !== 3) {
      return false;
    }
    if (inputNum.includes(0)) {
      return false;
    }
    String(inputNum)
      .split("")
      .forEach((str) => {
        allowed = !isNaN(str) && allowed;
      });

    return allowed;
  }

  startGame() {
    this.createAnswer();
    this.getUserInput();
  }
  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!this.checkException(input, true)) {
        throw "ERROR";
      }
      this.userInput = input;
      console.log(this.createResult());
      Console.close();
    });
  }

  createAnswer() {
    while (this.answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
