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

function userInputNumber() {
  MissionUtils.Console.readLine("3자리 숫자를 입력해주세요: ", (answer) => {
    let result = game.play(gameNumber, Number(answer));
    console.log(`게임 결과: ${result}`);
    if (result !== "3스트라이크") {
      userInputNumber();
    }
  });
}

userInputNumber();
