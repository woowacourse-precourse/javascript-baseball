const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  play() {
    // 랜덤으로 컴퓨터의 3자리 수 만드는 기능
    let RandomNumber = "";

    const make_Random = () => {
      let arr = [];
      while (arr.length < 3) {
        let num = Random.pickNumberInRange(1, 9);
        if (!arr.includes(num)) arr.push(num);
      }
      RandomNumber = arr.join("");
    };

    make_Random();

    // 게임을 시작하는 기능
    Console.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = App;
