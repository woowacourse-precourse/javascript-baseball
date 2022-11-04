const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(number) {
    this.number = number;
  }

  play(number, answer) {
    this.number = number;
    this.answer = answer;

    if (number === answer) {
      return "3스트라이크";
    }

    // 스트라이크와 볼 판정
    let strikeCount = 0;
    let ballCount = 0;

    let numberArr = String(number)
      .split("")
      .map((num) => Number(num));
    let answerArr = String(answer)
      .split("")
      .map((num) => Number(num));

    // 입력한 숫자 중 하나가 시스템 숫자와 일치하며 인덱스가 일치하는 경우 스트라이크
    // 입력한 숫자 중 하나가 시스템 숫자와 일치하며 인덱스가 일치하지 않는 경우 볼
    for (let i = 0; i < answerArr.length; i++) {
      if (answerArr[i] === numberArr[i]) {
        strikeCount = strikeCount + 1;
      } else if (numberArr.includes(answerArr[i])) {
        ballCount = ballCount + 1;
      } else if (!numberArr.includes(answerArr[i])) {
        return "낫싱";
      }
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
  }
}

module.exports = App;

const randomNumber = MissionUtils.Random.pickNumberInRange(100, 999);

const game = new App(randomNumber);
const gameNumber = game.number;

console.log(`시스템 게임 번호: ${gameNumber}`);

MissionUtils.Console.readLine("3자리 숫자를 입력해주세요: ", (answer) => {
  let result = game.play(gameNumber, Number(answer));
  console.log(`결과: ${result}`);
});
