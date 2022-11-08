const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = [];
    this.USER_INPUT = "";
    this.RESTART_INPUT = "";
  }

  getBall(ball, inputNumber, answer, includeOfNum) {
    inputNumber.forEach((num, idx) => {
      if (num !== answer[idx]) {
        if (includeOfNum[num]) {
          ball += 1;
        }
      }
    });

    return ball;
  }

  getStrike(strike, inputNumber, answer) {
    inputNumber.forEach((num, idx) => {
      if (num === answer[idx]) {
        strike += 1;
      }
    });
    return strike;
  }

  createResult(inputNumber, answer) {
    const WHAT_NUMBER = {};
    inputNumber = String(inputNumber).split("");
    answer = String(answer).split("");

    let ball = 0;
    let strike = 0;
    let result = "";

    answer.forEach((temp) => {
      WHAT_NUMBER[temp] = true;
    });

    ball = getBall(ball, inputNumber, answer, WHAT_NUMBER);
    strike = getStrike(strike, inputNumber, answer);

    if (ball > 0) result += `${ball}볼`;
    if (ball > 0 && strike > 0) result += " ";
    if (strike > 0) result += `${strike}스트라이크`;
    if (ball === 0 && strike === 0) result = "낫싱";

    return result;
  }

  isValid(checked, exception) {
    if (!exception) return false;
    if (isNaN(checked)) return false;
    return true;
  }

  checkException(input) {
    let valid = true;

    if (input.length !== 3) {
      return false;
    }
    String(input)
      .split("")
      .forEach((str) => {
        valid = isValid(str, exception);
      });

    return valid;
  }

  createNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }
    return COMPUTER.join("");
  }

  playGame(answer) {
    let repeat = true;
    while (repeat) {
      const USERINPUT = UserInput();
      const RESULT = createResult(USERINPUT, answer);
      console.log(RESULT);

      if (RESULT === "3스트라이크") {
        console.log("게임이 종료됩니다.");
        repeat = false;
      }
    }
  }

  UserInput() {
    let uesrInput = "";
    MissionUtils.Console.readLine('서로 다른 숫자 3자리를 입력하세요.', (input) => {
      console.log(input);
      if (!checkNumber(input)) {
        console.log("잘못된 숫자를 입력했습니다. 게임이 종료됩니다.");
        throw "잘못된 숫자를 입력했습니다. 게임이 종료됩니다.";
        MissionUtils.Console.close();
      }
      uesrInput = input;
    });
    return uesrInput;
  }
}

const app = new App();
console.log("서로 다른 숫자 3자리를 입력해주세요 : ")
app.play();

module.exports = App;