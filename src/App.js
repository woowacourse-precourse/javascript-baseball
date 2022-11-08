const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.NUMBER_ARRAY_MAX_LENGTH = 3;
  }

  play() {
    this.getStarted();
    this.playGame();
  }

  getStarted() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  playGame() {
    const correctNumber = this.createAnswerNumber();
    console.log(correctNumber);
    this.enterGuessNumber(correctNumber);
  }

  createAnswerNumber() {
    let numberArr = [];
    while (numberArr.length < this.NUMBER_ARRAY_MAX_LENGTH) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) numberArr.push(number);
    }
    return numberArr.join("");
  }

  enterGuessNumber(correctNumber) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (guessNumber) => {
      if (guessNumber.length !== this.NUMBER_ARRAY_MAX_LENGTH) {
        throw "input value length isn't correct!";
      }
      const guessNumberArray = guessNumber
        .split("")
        .map((value) => parseInt(value));
      const correctNumberArray = correctNumber
        .split("")
        .map((value) => parseInt(value));
      const scoreboard = { strike: 0, ball: 0 };

      guessNumberArray.forEach((number, index) => {
        this.isStrikeOrBall(number, index, correctNumberArray, scoreboard);
      });

      this.notifyGuessResult(scoreboard);

      if (scoreboard.strike === 3) {
        this.isReplay();
        return;
      }

      this.enterGuessNumber(correctNumber);
    });
  }

  isStrikeOrBall(number, index, array, scoreboard) {
    if (array.includes(number)) {
      if (array[index] === number) {
        scoreboard.strike++;
      } else {
        scoreboard.ball++;
      }
    }
  }

  notifyGuessResult(scoreboard) {
    if (!scoreboard.strike && !scoreboard.ball) {
      MissionUtils.Console.print("낫싱");
    }

    if (!scoreboard.strike && scoreboard.ball) {
      MissionUtils.Console.print(`${scoreboard.ball}볼 `);
    }

    if (scoreboard.strike && !scoreboard.ball) {
      MissionUtils.Console.print(`${scoreboard.strike}스트라이크`);
      if (scoreboard.strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      }
    }

    if (scoreboard.strike && scoreboard.ball) {
      MissionUtils.Console.print(
        `${scoreboard.ball}볼 ${scoreboard.strike}스트라이크`
      );
    }
  }

  isReplay() {
    const RESTART = 1;
    const GAME_OVER = 2;
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    MissionUtils.Console.readLine("", (answer) => {
      if (answer === RESTART) this.playGame();
      if (answer === GAME_OVER) MissionUtils.Console.close();
    });
  }
}

module.exports = App;
