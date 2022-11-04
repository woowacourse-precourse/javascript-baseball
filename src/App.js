const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(number) {
    this.number = number;
  }

  play(number, answer) {
    this.number = number;
    this.answer = answer;

    // 스트라이크와 볼 판정
    let strikeCount = 0;
    let ballCount = 0;
    let result = "";

    if (number === answer) {
      result = "3스트라이크";
      return result;
    }

    let numberArr = String(number)
      .split("")
      .map((num) => Number(num));
    let answerArr = String(answer)
      .split("")
      .map((num) => Number(num));

    for (let i = 0; i < answerArr.length; i++) {
      if (answerArr[i] === numberArr[i]) {
        strikeCount = strikeCount + 1;
      } else if (numberArr.includes(answerArr[i])) {
        ballCount = ballCount + 1;
      } else if (!numberArr.includes(answerArr[i])) {
        result = "낫싱";
      }
    }
    result = `${ballCount}볼 ${strikeCount}스트라이크`;
    return result;
  }
}

module.exports = App;

const randomNumber = MissionUtils.Random.pickNumberInRange(100, 999);

const game = new App(randomNumber);
const gameNumber = game.number;

console.log(`시스템 게임 번호: ${gameNumber}`);
MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

function userInputNumber() {
  MissionUtils.Console.readLine("3자리 숫자를 입력해주세요: ", (answer) => {
    let result = game.play(gameNumber, Number(answer));
    console.log(`게임 결과: ${result}`);
    if (result !== "3스트라이크") {
      userInputNumber();
    }
    if (result === "3스트라이크") {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다!");
      MissionUtils.Console.print(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      MissionUtils.Console.readLine("게임 재개 여부: ", (gameResumeChoice) => {
        if (Number(gameResumeChoice) === 1) {
          userInputNumber();
        } else if (Number(gameResumeChoice) === 2) {
          return MissionUtils.Console.print("게임을 종료합니다.");
        }
      });
    }
  });
}

userInputNumber();
