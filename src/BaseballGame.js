const { Console } = require("@woowacourse/mission-utils");
const pickedNumberByComputer = require("./pickedNumberByComputer");
const input = require("./util/input");

class BaseballGame {
  constructor() {
    this.pickedNumberByComputer = pickedNumberByComputer();
  }

  countStrikeBallNothing(pickedNumberByUser, pickedNumberByComputer) {
    let strike = 0;
    let ball = 0;
    let nothing = 0;
    pickedNumberByComputer.forEach((num, idx) => {
      // 같은 수이고,
      if (pickedNumberByComputer.includes(Number(pickedNumberByUser[idx]))) {
        // 같은 자리일 때
        if (num === Number(pickedNumberByUser[idx])) strike += 1;
        // 다른 자리일 때
        else ball += 1;
        // 같은 수가 없을 때
      } else nothing += 1;
    });

    return [strike, ball, nothing];
  }

  printResultsForCount(strike, ball, nothing) {
    if (nothing === 3) Console.print(`낫싱`);
    else if (strike > 0 && ball === 0) Console.print(`${strike}스트라이크`);
    else if (ball > 0 && strike === 0) Console.print(`${ball}볼`);
    else Console.print(`${ball}볼 ${strike}스트라이크 `);
  }

  async isThreeStrike() {
    while (!this.threeStrike) {
      let pickedNumberByUser = await input("숫자를 입력해주세요 : ");
      let [strike, ball, nothing] = countStrikeBallNothing(
        pickedNumberByUser,
        this.pickedNumberByComputer
      );
      resultsForCount(strike, ball, nothing);
      if (strike === 3) this.threeStrike = true;
    }
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    new GameManager().restartOrEnd();
  }
}

module.exports = BaseballGame;
