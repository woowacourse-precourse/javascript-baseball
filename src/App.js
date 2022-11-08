const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(result) {
    this.result = result;
  }

  play() {
    let gameNumber = this.newRandomNumber();
    this.gameStart(gameNumber);
  }

  newRandomNumber() {
    const NumSet = new Set();
    while (NumSet.size < 3) {
      NumSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }

    const gameNumber = Number([...NumSet].join(""));
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    return gameNumber;
  }

  gameStart(gameNumber) {
    MissionUtils.Console.readLine("3자리 숫자를 입력해주세요: ", (answer) => {
      console.log(`입력값: ${answer}`);
      if (answer.length !== 3) {
        throw new Error("입력값은 반드시 3자리 숫자여야 합니다.");
      }

      if (Number(gameNumber) === Number(answer)) {
        this.result = "3스트라이크";
        if (this.result === "3스트라이크") {
          MissionUtils.Console.print(this.result);
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          MissionUtils.Console.print(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );
          return MissionUtils.Console.readLine(
            "게임 재개 여부: ",
            (gameResumeChoice) => {
              if (Number(gameResumeChoice) === 1) {
                this.play();
              } else if (Number(gameResumeChoice) === 2) {
                MissionUtils.Console.print("게임 종료");
              }
            }
          );
        }
      }

      try {
        let strikeCount = 0;
        let ballCount = 0;

        let numberArr = String(gameNumber)
          .split("")
          .map((num) => Number(num));
        let answerArr = String(answer)
          .split("")
          .map((num) => Number(num));

        for (let i = 0; i < answerArr.length; i++) {
          if (answerArr[i] === numberArr[i]) {
            strikeCount = strikeCount + 1;
          } else if (
            numberArr.includes(answerArr[i]) &&
            numberArr[i] !== answerArr[i]
          ) {
            ballCount = ballCount + 1;
          } else if (!numberArr.includes(answerArr[i])) {
            this.result = "낫싱";
          }
        }

        if (this.result === "0볼 0스트라이크") {
          this.result = "낫싱";
        } else if ((strikeCount > 0) & (ballCount === 0)) {
          this.result = `${strikeCount}스트라이크`;
        } else if ((strikeCount == 0) & (ballCount > 0)) {
          this.result = `${ballCount}볼`;
        } else if ((strikeCount > 0) & (ballCount > 0)) {
          this.result = `${ballCount}볼 ${strikeCount}스트라이크`;
        }
        MissionUtils.Console.print(`${this.result}`);

        if (this.result !== "3스트라이크") {
          this.gameStart(gameNumber);
        }
      } catch (e) {
        MissionUtils.Console.print(e);
      }
    });
  }
}

module.exports = App;
