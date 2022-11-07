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
      if (userInput.length !== [...new Set(USER_VALUE_ARRAY)].length) {
        throw new Error("서로 다른 3개의 숫자를 입력해 주세요.");
      }
      if (USER_VALUE_ARRAY.includes(0)) {
        throw new Error("1 ~ 9 사이의 숫자 3개를 골라주세요.");
      }
      return this.compare(USER_VALUE_ARRAY, this.computerValue);
    });
  }

  compare(userValue, computerValue) {
    let strikeCount = 0;
    let ballCount = 0;
    const INCLUDED_VALUE = computerValue.filter((num) =>
      userValue.includes(num)
    );
    for (let index = 0; index < 3; index++) {
      if (userValue[index] === computerValue[index]) {
        strikeCount++;
      }
      if (INCLUDED_VALUE.length !== strikeCount) {
        ballCount = INCLUDED_VALUE.length - strikeCount;
      }
    }
    return this.result(strikeCount, ballCount);
  }

  result(strikeCount, ballCount) {
    if (strikeCount === 3) {
      CONSOLE_UTIL.print(`${strikeCount}스트라이크`);
      CONSOLE_UTIL.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.endGame();
    }
    if (strikeCount && strikeCount !== 3) {
      this.strikeOrBallStrike(strikeCount, ballCount);
      this.acceptUserNumber();
    }
    if (!strikeCount) {
      this.nothingOrBall(ballCount);
      this.acceptUserNumber();
    }
  }

  strikeOrBallStrike(ballCount, strikeCount) {
    !ballCount
      ? CONSOLE_UTIL.print(`${strikeCount}스트라이크`)
      : CONSOLE_UTIL.print(`${ballCount}볼 ${strikeCount}스트라이크`);
  }
  nothingOrBall(ballCount) {
    !ballCount
      ? CONSOLE_UTIL.print("낫싱")
      : CONSOLE_UTIL.print(`${ballCount}볼`);
  }

  endGame() {
    CONSOLE_UTIL.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        answer = Number(answer);
        if (answer !== 1 && answer !== 2) {
          throw new Error("1 또는 2를 입력하세요.");
        }
        if (answer === 1) {
          this.computerValue = [];
          CONSOLE_UTIL.print("숫자 야구 게임을 시작합니다.");
          this.play();
        }
        return CONSOLE_UTIL.close();
      }
    );
  }

  play() {
    this.makeRandomValue();
    this.acceptUserNumber();
  }
}

CONSOLE_UTIL.print("숫자 야구 게임을 시작합니다.");

module.exports = App;
