const MissionUtils = require("@woowacourse/mission-utils");

// 컴퓨터가 가지고 있을 세 개의 수 생성
function createAnswer() {
  const answer = [];
  while (answer.length < 3) {
    const num = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(num)) {
      answer.push(num);
    }
  }
  return answer;
}

class App {
  play() {
    const answer = createAnswer();

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = App;

const app = new App();
app.play();
