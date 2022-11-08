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
    const randomNumber = MissionUtils.Random.pickNumberInRange(100, 999);
    const gameNumber = randomNumber;
    console.log(`시스템 게임 번호: ${gameNumber}`);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    return gameNumber;
  }

  gameStart(gameNumber) {
    MissionUtils.Console.readLine("3자리 숫자를 입력해주세요: ", (answer) => {
      if (answer.length !== 3) {
        throw "입력값은 반드시 3자리 숫자여야 합니다.";
      }

      if (Number(gameNumber) === Number(answer)) {
        this.result = "3스트라이크";
        console.log(this.result);
        if (this.result === "3스트라이크") {
          MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다!");
          MissionUtils.Console.print(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );
          return MissionUtils.Console.readLine(
            "게임 재개 여부: ",
            (gameResumeChoice) => {
              if (Number(gameResumeChoice) === 1) {
                this.play();
              } else if (Number(gameResumeChoice) === 2) {
                MissionUtils.Console.print("게임을 종료합니다.");
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

        this.result = `${ballCount}볼 ${strikeCount}스트라이크`;
        if (this.result === "0볼 0스트라이크") {
          this.result = "낫싱";
        }
        MissionUtils.Console.print(`${this.result}`);

        if (this.result !== "3스트라이크") {
          this.gameStart(gameNumber);
        }
      } catch (e) {
        console.error(e);
      }
    });
  }
}

module.exports = App;

const app = new App();
app.play();
99;
