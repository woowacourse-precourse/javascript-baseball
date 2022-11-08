const MissionUtils = require("@woowacourse/mission-utils");
class App {
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
    while (numberArr.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) numberArr.push(number);
    }
    return numberArr.join("");
  }

  enterGuessNumber(correctNumber) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (guessNumber) => {
      if (guessNumber.length !== 3) {
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
        if (correctNumberArray.includes(number)) {
          if (correctNumberArray[index] === number) {
            scoreboard.strike++;
          } else {
            scoreboard.ball++;
          }
        }
      });

      this.notifyGuessResult(scoreboard);

      if (scoreboard.strike === 3) {
        this.isReplay();
        return;
      }

      this.enterGuessNumber(correctNumber);
    });
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
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    MissionUtils.Console.readLine("", (answer) => {
      if (answer === "1") this.playGame();
      if (answer === "2") MissionUtils.Console.close();
    });
  }
}

module.exports = App;
