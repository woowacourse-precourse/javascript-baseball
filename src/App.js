const MissionUtils = require("@woowacourse/mission-utils");

class App {
  /* 랜덤 숫자 추출 */
  pickRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) numbers.push(number);
    }

    return numbers;
  }

  /* 게임 플레이 */
  play() {
    const numbers = this.pickRandomNumbers();

    // 게임 시작 문구 출력
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      // console.log(answer);
    })
  }
}

const app = new App();
app.play();

module.exports = App;
