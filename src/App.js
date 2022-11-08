const MissionUtils = require("@woowacourse/mission-utils");
const e = require("cors");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  pickUniqueNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(0, 9, 3).join("");
  }
  getInputNumber(pickedNumber) {
    let strike = 0;
    while (strike === 0)
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
        let gameResultComment = this.numberCheck(pickedNumber, number);
        MissionUtils.Console.print(gameResultComment);
        if (gameResultComment === "3스트라이크") {
          strike = 3;
        }
      });
  }
  numberCheck(pickedNumber, number) {
    if (String(number).length < 3 || String(number).length > 3) {
      throw "세자리 숫자를 입력해주세요";
    }
    let inputNumber = String(number).split("");
    let computerPickedNumber = pickedNumber.split("");
    let gameResult = { ball: 0, strike: 0 };
    for (let i = 0; i < 3; i++) {
      if (computerPickedNumber[i] === Number(inputNumber[i])) {
        gameResult.strike += 1;
      } else if (computerPickedNumber.includes(Number(inputNumber[i]))) {
        gameResult.ball += 1;
      }
    }
    if (gameResult.strike === 0 && gameResult.ball === 0) {
      return `낫싱`;
    } else if (gameResult.strike === 0 && gameResult.ball) {
      return `${gameResult.ball}볼`;
    } else if (gameResult.strike && gameResult.ball === 0) {
      return `${gameResult.strike}스트라이크`;
    } else {
      return `${gameResult.ball}볼 ${gameResult.strike}스트라이크`;
    }
  }
}
module.exports = App;
