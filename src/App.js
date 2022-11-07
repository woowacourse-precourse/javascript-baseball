const MissionUtils = require("@woowacourse/mission-utils");
const { message, checkStyle } = require("./message/message");

const { Random, Console } = MissionUtils;
const { START, ENTER, CLEAR, FINISH, END, CONTINUE, ERROR } = message;
const { PLAY, RESTART } = checkStyle;

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
    if (result === CLEAR) {
      Console.print(FINISH);
      this.restartQuestion();
    } else this.getUserInput();
  }

  checkPlayingNum(inputNum, allowed) {
    if (inputNum.length !== 3 || inputNum.includes(0)) {
      return false;
    }
    [...inputNum].forEach((str) => {
      allowed = !isNaN(str) && allowed;
    });
    return allowed;
  }

  checkException(inputNum, checkStyle) {
    if (checkStyle === PLAY) {
      return this.checkPlayingNum(inputNum, true);
    } else if (checkStyle === RESTART) {
      return inputNum === "1" || inputNum === "2";
    }
  }

  restartQuestion() {
    Console.readLine(`${CONTINUE}\n`, (input) => {
      if (!this.checkException(input, RESTART)) {
        throw new Error(ERROR);
      }
      if (input === "1") this.startGame();
      Console.print(END);
      Console.close();
    });
  }

  getUserInput() {
    Console.readLine(ENTER, (input) => {
      if (!this.checkException(input, PLAY)) {
        throw new Error(ERROR);
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
    Console.print(START);
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
