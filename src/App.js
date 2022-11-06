const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {

    function ComputerPicksNumber() {
      let targetNumber = MissionUtils.Random.pickNumberInRange(100, 999);
      let [a, b, c] = targetNumber.toString().split("");
      do {
        let targetNumber = MissionUtils.Random.pickNumberInRange(100, 999);
        [a, b, c] = targetNumber.toString().split("");
      } while (a === b || b === c || a === c)
      targetNumber = a + b + c;
      return targetNumber;
    };

    function sayStart() {
      console.log('숫자 야구 게임을 시작합니다.');
    };

    sayStart();

    let NumberPickedByComputer = ComputerPicksNumber();
    console.log("컴퓨터 픽 넘버는?: " + NumberPickedByComputer);
  }
}

let app = new App();
app.play();

module.exports = App;
