const MissionUtils = require("@woowacourse/mission-utils");
const {
  GAME_STATE_MESSAGE,
  GAME_RESULT_MESSAGE,
  ERROR_MESSAGE,
} = require("./Constants/Message");
const NumberUtils = require("./Utils/Number");

class App {
  constructor() {
    this.NumberUtil = new NumberUtils();
    this.computerNumber = 0;
  }

  userInputNumber() {
    MissionUtils.Console.readLine(GAME_STATE_MESSAGE.ENTER_NUMBER, (number) => {
      this.NumberUtil.isBaseballNumber(number);
      const result = this.compareNumber(number);
      MissionUtils.Console.print(result);
      if (result !== "3스트라이크") {
        this.userInputNumber();
      }
      if (result === "3스트라이크") {
        this.isReStart();
      }
    });
  }

  compareNumber(userNumber) {
    const userNumberArray = this.NumberUtil.NumberToArray(userNumber);
    const computerNumberArray = this.NumberUtil.NumberToArray(
      this.computerNumber
    );
    let ball = 0;
    let strike = 0;
    const total =
      6 - new Set([...userNumberArray, ...computerNumberArray]).size;

    if (total === 0) return GAME_RESULT_MESSAGE.NOTHING;

    for (let index = 0; index < 3; index++) {
      if (userNumberArray[index] === computerNumberArray[index]) {
        strike += 1;
      }
    }
    ball = total - strike;
    if (ball === 0) return `${strike}${GAME_RESULT_MESSAGE.STRIKE}`;
    if (strike === 0) return `${ball}${GAME_RESULT_MESSAGE.BALL}`;
    return `${ball}${GAME_RESULT_MESSAGE.BALL} ${strike}${GAME_RESULT_MESSAGE.STRIKE}`;
  }

  isReStart() {
    MissionUtils.Console.readLine(GAME_STATE_MESSAGE.WIN, (number) => {
      number = Number(number);
      if (number === 1) this.game();
      else if (number === 2) {
        MissionUtils.Console.print(GAME_STATE_MESSAGE.END);
        MissionUtils.Console.close();
      } else throw ERROR_MESSAGE.ONLY_ONE_TWO;
    });
  }

  game() {
    this.computerNumber = this.NumberUtil.getRandomBaseballNumber();
    this.userInputNumber();
  }
  play() {
    MissionUtils.Console.print(GAME_STATE_MESSAGE.START);
    this.game();
  }
}

module.exports = App;

const app = new App();
app.play();
