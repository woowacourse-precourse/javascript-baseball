const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, FORMAT, ERROR } = require("./constant/constant");

const { Random, Console } = MissionUtils;
const allowNum = /[1-9]/;

class App {
  constructor() {
    this.answer = [];
    this.userInput = "";
  }

  getCnt(includeOfNum) {
    let ballCnt = 0;
    let strikeCnt = 0;
    [...this.userInput].forEach((num, idx) => {
      if (+num !== this.answer[idx] && includeOfNum[num]) ballCnt += 1;
      else if (+num === this.answer[idx]) strikeCnt += 1;
    });

    return [ballCnt, strikeCnt];
  }

  createResult() {
    const includeOfNum = Array.from({ length: 10 }).fill(false);
    let result = "";

    this.answer.forEach((num) => {
      includeOfNum[num] = true;
    });

    const [ball, strike] = this.getCnt(includeOfNum);

    if (ball === 0 && strike === 0) result = "낫싱";
    if (ball > 0) result += `${ball}볼`;
    if (ball > 0 && strike > 0) result += " ";
    if (strike > 0) result += `${strike}스트라이크`;

    Console.print(result);
    if (result === MESSAGE.CLEAR) {
      Console.print(MESSAGE.FINISH);
      this.restartQuestion();
    } else this.getUserInput();
  }

  checkPlayingNum(inputNum, allowed) {
    const duplicationCheck = [...new Set(inputNum)].length;
    if (inputNum.length !== 3) throw new Error(ERROR.LENGTH);
    if (duplicationCheck !== 3) throw new Error(ERROR.DUPLICATION);
    inputNum.forEach((str) => {
      allowed = allowNum.test(str) && allowed;
    });
    return allowed;
  }

  checkException(inputNum, checkStyle) {
    if (checkStyle === FORMAT.PLAY) {
      return this.checkPlayingNum([...inputNum], true);
    } else if (checkStyle === FORMAT.RESTART) {
      return inputNum === "1" || inputNum === "2";
    }
  }

  restartQuestion() {
    Console.readLine(`${MESSAGE.CONTINUE}\n`, (input) => {
      if (!this.checkException(input, FORMAT.RESTART)) {
        throw new Error(ERROR.SELECT);
      }
      if (input === "1") this.startGame();
      else if (input === "2") {
        Console.print(MESSAGE.END);
        Console.close();
      }
    });
  }

  getUserInput() {
    Console.readLine(MESSAGE.ENTER, (input) => {
      if (!this.checkException(input, FORMAT.PLAY)) {
        throw new Error(ERROR.STRING);
      }
      this.userInput = input;
      this.createResult();
    });
  }

  createAnswer() {
    this.answer = [];
    while (this.answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  startGame() {
    this.createAnswer();
    this.getUserInput();
    this.restartQuestion();
  }

  play() {
    Console.print(MESSAGE.START);
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
