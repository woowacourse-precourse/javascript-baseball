const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.isPlaying = false;
    this.isFirstPlay = true;
  }

  start() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.isFirstPlay = false;
  }

  async play() {
    if (this.isFirstPlay) {
      this.start();
    }
    this.isPlaying = true;
    const COMPUTER_ANSWER = this.generateDifferRandomNumArr(3);
    while (this.isPlaying) {
      const USER_INPUT = await this.getUserInputArr();
      const RESULT = this.scoreUserInput(COMPUTER_ANSWER, USER_INPUT);
      this.getHintOfAnswer(RESULT);
    }
  }

  checkIfRestartGame() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (userInput) => {
          if (userInput == 1) {
            resolve(this.play());
          }
          if (userInput == 2) {
            this.isPlaying = false;
            resolve(MissionUtils.Console.close());
          }
        }
      );
    });
  }

  generateDifferRandomNumArr(numOfDigits) {
    const DIFFER_RANDOM_NUM_ARR = [];
    let randomNum;
    while (DIFFER_RANDOM_NUM_ARR.length < numOfDigits) {
      randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!DIFFER_RANDOM_NUM_ARR.includes(randomNum)) {
        DIFFER_RANDOM_NUM_ARR.push(randomNum);
      }
    }
    return DIFFER_RANDOM_NUM_ARR;
  }

  checkUserInputValid(userInputArr) {
    if (!userInputArr) {
      throw new Error();
    }
    if (
      !userInputArr.every((num) => {
        return Number.isInteger(num) && num > 0;
      })
    ) {
      throw new Error();
    }
    if (userInputArr.length !== 3) {
      throw new Error();
    }
    if (userInputArr.includes(0)) {
      throw new Error();
    }
    if (new Set(userInputArr).size !== userInputArr.length) {
      throw new Error();
    }
    return true;
  }

  getHintOfAnswer(result) {
    if (result.ball === 0 && result.strike === 0) {
      MissionUtils.Console.print("낫싱");
      return MissionUtils.Console.close();
    }
    if (result.ball === 0 && result.strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return MissionUtils.Console.close();
    }
    MissionUtils.Console.print(`${result.ball}볼 ${result.strike}스트라이크 `);
    return MissionUtils.Console.close();
  }

  scoreUserInput(answerArr, userInputArr) {
    let result = { ball: 0, strike: 0 };
    const LENTH_OF_ARRAY = 3;

    if (!userInputArr.some((num) => answerArr.includes(num))) {
      return result;
    }
    if (userInputArr.every((num) => answerArr.includes(num))) {
      for (let i = 0; i < LENTH_OF_ARRAY; i++) {
        if (answerArr[i] === userInputArr[i]) {
          result.strike += 1;
        }
        if (answerArr[i] !== userInputArr[i]) {
          result.ball += 1;
        }
      }
      return result;
    }
    for (let i = 0; i < LENTH_OF_ARRAY; i++) {
      if (answerArr[i] === userInputArr[i]) {
        result.strike += 1;
      }
      if (
        answerArr[i] !== userInputArr[i] &&
        answerArr.includes(userInputArr[i])
      ) {
        result.ball += 1;
      }
    }
    return result;
  }
  getUserInputArr() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(
        "숫자를 입력해주세요 : ",
        (userInputArr) => {
          userInputArr = Array.from(String(userInputArr));
          userInputArr = userInputArr.map((num) => Number(num));
          resolve(userInputArr);
          if (this.checkUserInputValid(userInputArr)) {
            return userInputArr;
          }
        }
      );
    });
  }
}

module.exports = App;
const app = new App();
app.play();
