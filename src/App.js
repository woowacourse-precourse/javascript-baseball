const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const Console = MissionUtils.Console;
    const Random = MissionUtils.Random;

    const tries = [];
    let targetNums;

    const randomPick = () => {
      let result = [];
      while (result.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!result.includes(number)) {
          result.push(number);
        }
      }
      return result.join("");
    };

    const startGame = () => {
      targetNums = randomPick();
      enterNumber();
    };

    Console.print("숫자야구 게임을 시작합니다.");
    startGame();
  }
}

module.exports = App;
