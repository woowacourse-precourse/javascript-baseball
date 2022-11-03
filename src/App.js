const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    console.log("숫자 야구 게임을 시작합니다.");
    const ATK_NUM = MissionUtils.Console.readLine('숫자를 입력하세요 :',(answer)=>{return answer});
    const DEF_NUM = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3);
  }
}
const app = new App();
app.play();

module.exports = App;
