const { CONSOLE_UTIL, RANDOM_UTIL } = require("./Utils");

class App {
  constructor() {
    this.computerValue = [];
  }

  makeRandomValue() {
    while (this.computerValue.length < 3) {
      const RANDOM_NUMBER = RANDOM_UTIL.pickNumberInRange(1, 9);
      if (!this.computerValue.includes(RANDOM_NUMBER)) {
        this.computerValue.push(RANDOM_NUMBER);
      }
    }
  }

  acceptUserNumber() {
    CONSOLE_UTIL.readLine("숫자를 입력해 주세요 : ", (userInput) => {
      userInput = String(userInput);
      const USER_VALUE_ARRAY = Array.from(userInput, Number);
      if (userInput < 1 || isNaN(userInput) || userInput.length !== 3) {
        throw new Error("3자리 양의 정수를 입력해 주세요.");
      }
      return this.compare(USER_VALUE_ARRAY, this.computerValue);
    });
  }

  compare(userValue, computerValue) {
    let strike = 0;
    let ball = 0;
    const INCLUDED_VALUE = computerValue.filter((num) =>
      userValue.includes(num)
    );
    for (let index = 0; index < 3; index++) {
      if (userValue[index] === computerValue[index]) {
        strike++;
      }
      if (INCLUDED_VALUE.length !== strike) {
        ball = INCLUDED_VALUE.length - strike;
      }
    }
    return this.result(strike, ball);
  }

  result(strike, ball) {
    if (strike === 3) {
      CONSOLE_UTIL.print(`${strike}스트라이크`);
      CONSOLE_UTIL.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.endGame();
    }
    if (strike === 0) {
      if (ball === 0) CONSOLE_UTIL.print("낫싱");
      else {
        CONSOLE_UTIL.print(`${ball}볼`);
      }
      return this.acceptUserNumber();
    }
    if (strike !== 0 && strike !== 3) {
      if (ball === 0) CONSOLE_UTIL.print(`${strike}스트라이크`);
      else {
        CONSOLE_UTIL.print(`${ball}볼 ${strike}스트라이크`);
      }
      return this.acceptUserNumber();
    }
  }

  play() {}
}

module.exports = App;
