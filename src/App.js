
class App {
  play() {
    // 정답 숫자 선정
    const computer = [];
    const MissionUtils = require("@woowacourse/mission-utils");
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    // 사용자로부터 입력값 얻기
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answer) => {
      console.log(`숫자를 입력해주세요 : ${answer}`);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
