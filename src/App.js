const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    console.log("1~9 중 랜덤: ", MissionUtils.Random.pickNumberInRange(1, 9));
    console.log("1~9 중 랜덤: ", MissionUtils.Random.pickNumberInRange(1, 9));
    console.log("1~9 중 랜덤: ", MissionUtils.Random.pickNumberInRange(1, 9));
    console.log("1~9 중 랜덤: ", MissionUtils.Random.pickNumberInRange(1, 9));
    console.log("1~9 중 랜덤: ", MissionUtils.Random.pickNumberInRange(1, 9));
    console.log("1~9 중 랜덤: ", MissionUtils.Random.pickNumberInRange(1, 9));
    console.log("1~9 중 랜덤: ", MissionUtils.Random.pickNumberInRange(1, 9));
    console.log("1~9 중 랜덤: ", MissionUtils.Random.pickNumberInRange(1, 9));
    console.log("1~9 중 랜덤: ", MissionUtils.Random.pickNumberInRange(1, 9));
    console.log("1~9 중 랜덤: ", MissionUtils.Random.pickNumberInRange(1, 9));
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      console.log(`${answer}`);
      MissionUtils.Console.close();
    });
  }
}

module.exports = App;

const app = new App();
app.play();
