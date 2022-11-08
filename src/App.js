import MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {
    const answer = MissionUtils.Random.pickNumberInRange(111, 999);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let isGamePlaying = true;
  }
}
const app = new App();
app.play();

export default App;
