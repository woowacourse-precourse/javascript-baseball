const MissionUtils = require("@woowacourse/mission-utils");
const {
  GAME_START_SENTENCE,
  PLAYER_INPUT_SENTENCE,
  THREE_DIGISTS,
} = require("./constants");

class App {
  answer;
  playerInputValue;

  play() {
    this.printGameStartText();
    this.createAnswer();
    this.getPlayerInputValue();
  }

  printGameStartText() {
    MissionUtils.Console.print(GAME_START_SENTENCE);
  }

  createAnswer() {
    const randomUniqueNumberList = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      THREE_DIGISTS
    );
    this.answer = Number(randomUniqueNumberList.join(""));
  }

  getPlayerInputValue() {
    MissionUtils.Console.readLine(PLAYER_INPUT_SENTENCE, (playerInputValue) => {
      this.checkPlayerInputValueValidation(playerInputValue);
      this.compareNumbers(this.answer, this.playerInputValue);
    });
  }

  checkPlayerInputValueValidation(playerInputValue) {
    if (
      this.checkNumberDigits(playerInputValue) &&
      !this.checkIncludesZero(playerInputValue)
    ) {
      this.playerInputValue = Number(playerInputValue);
    } else {
      throw new Error("잘못된 입력값입니다.");
    }
  }

  checkNumberDigits(string) {
    return String(string).length === THREE_DIGISTS;
  }
  checkIncludesZero(string) {
    return String(string).includes("0");
  }

  compareNumbers(answer, playerInputValue) {
    const answerNumberList = String(answer).split("");
    const playerNumberList = String(playerInputValue).split("");
    const allNumberList = [...answerNumberList, ...playerNumberList];
    const deduplicatedAllNumberList = [...new Set(allNumberList)];

    if (answer === playerInputValue) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다!");
      MissionUtils.Console.close();
      return;
    }
    if (deduplicatedAllNumberList.length === THREE_DIGISTS * 2) {
      MissionUtils.Console.print("낫싱");
      return;
    }

    const baseballGameResult = playerNumberList.reduce(
      (baseballGameResult, targetPlayerNumber, targetPlayerNumberIndex) => {
        const indexOf = answerNumberList.indexOf(targetPlayerNumber);
        if (indexOf !== -1) {
          if (indexOf === targetPlayerNumberIndex) {
            baseballGameResult["strike"]
              ? baseballGameResult["strike"]++
              : (baseballGameResult["strike"] = 1);
          } else {
            baseballGameResult["ball"]
              ? baseballGameResult["ball"]++
              : (baseballGameResult["ball"] = 1);
          }
        }
        return baseballGameResult;
      },
      {}
    );
    this.makeBallStrikeSentence(baseballGameResult);
  }

  makeBallStrikeSentence({ strike, ball }) {
    const ballSentence = ball ? `${ball}볼` : "";
    const strikeSentence = strike ? `${strike}스트라이크` : "";
    if (ball && !strike) {
      MissionUtils.Console.print(ballSentence);
      return;
    }
    if (strike && !ball) {
      MissionUtils.Console.print(strikeSentence);
      return;
    }
    MissionUtils.Console.print(`${ballSentence} ${strikeSentence}`);
  }
}

const app = new App();
app.play();
//app.compareNumbers(713, 123);
module.exports = App;
